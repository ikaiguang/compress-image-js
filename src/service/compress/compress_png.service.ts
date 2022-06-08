import {IOptions} from '../../util/option/option.util.js';
import {IResponse, responseUtil} from '../../util/response/response.util.js';
import {CreateDirSyncFromFilename, ReadFileSync, WriteFileSync} from '../../util/file/file.util.js';
import pnglib from 'upng-js';

// CompressPNG 压缩PNG
export function CompressPNG(options: IOptions): IResponse {
  let resp = responseUtil.DefaultIResponse();
  // console.log("🚀", options);

  // 图片
  const imgBuffer = ReadFileSync(options['input']);
  const img = pnglib.decode(imgBuffer);
  const rgba: ArrayBuffer[] = pnglib.toRGBA8(img);

  // 压缩比例：cnum = Or just use 0 for lossless / 256 for lossy.
  const compressQuality = pngCompressQuality(options['quality']);
  // console.log("🚀", compressQuality)
  const pngImg = pnglib.encode(rgba, img.width, img.height, compressQuality);

  // 检查输出文件夹
  CreateDirSyncFromFilename(options['output'])

  // 写文件
  WriteFileSync(options['output'], pngImg);
  return resp;
}

// pngCompressQuality png压缩质量
function pngCompressQuality(quality: number): number {
  if (quality < 0 || quality >= 100) {
    return 0;
  }
  return Math.ceil((256 * (100 - quality)) / 100);
}
