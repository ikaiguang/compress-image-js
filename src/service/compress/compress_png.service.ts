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
  const pngImg = encode(rgba, img.width, img.height, 0);

  let callback = () => {};
  WriteFile(options['output'], pngImg, callback);
  return resp;
}
