import {IOptions} from "../../util/option/option.utils";
import {IResponse, responseUtil} from "../../util/response/response.util";

// import {execFile} from 'node:child_process';
// import mozjpeg from 'mozjpeg';

// CompressJPG 压缩JPG
export function CompressJPG(options: IOptions): IResponse {
  let resp = responseUtil.DefaultIResponse();
  // console.log("🚀", options);

  // 图片
  // const imgBuffer = ReadFile(options['input']);

  console.log("==>>>>>> ", options['input']);
  let commandArs = [
    '-quality', "80",
    '-outfile', options['output'],
    options["input"],
  ]
  // execFile(mozjpeg, commandArs, () => {
  //   console.log('Image minified!');
  // });

  return resp;
}
