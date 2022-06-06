import { IOptions } from '../../util/option/option.utils';
import { IResponse, responseUtil } from '../../util/response/response.util';
import { ReadFile, WriteFile } from '../../util/file/file.util';
import { decode, encode, toRGBA8 } from 'upng-js';

// CompressPNG 压缩PNG
export function CompressPNG(options: IOptions): IResponse {
  let resp = responseUtil.DefaultIResponse();
  // console.log("",options);
  // console.log(upng)

  // 图片
  const imgBuffer = ReadFile(options['input']);
  const img = decode(imgBuffer);
  const rgba: ArrayBuffer[] = toRGBA8(img);

  // 压缩比例：cnum = Or just use 0 for lossless / 256 for lossy.
  const compressQuality = pngCompressQuality(options['quality']);
  // console.log(compressQuality)
  const pngImg = encode(rgba, img.width, img.height, compressQuality);

  // 写文件
  let callback = () => {};
  WriteFile(options['output'], pngImg, callback);
  return resp;
}

// pngCompressQuality png压缩质量
function pngCompressQuality(quality: number): number {
  if (quality <= 0 || quality >= 100) {
    return 0;
  }
  return Math.ceil((256 * (100 - quality)) / 100);
}
