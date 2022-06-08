import {IOptions} from '../../util/option/option.util.js';
import {IResponse, responseUtil} from '../../util/response/response.util.js';
import {ExecCommand, ExecCommandSync, IExecCommandResult, IsIExecCommandResult} from "../../util/cmd/cmd.util.js";
import {ICode} from '../../util/response/respone_enum.util.js';
import mozjpeg from 'mozjpeg';
import {CreateDirSyncFromFilename} from "../../util/file/file.util.js";

// CompressJPG 压缩JPG
export function CompressJPG(options: IOptions): IResponse {
  let resp = responseUtil.DefaultIResponse();
  // console.log("🚀", options);

  // 检查输出文件夹
  CreateDirSyncFromFilename(options['output'])

  let commandArs = [
    '-quality',
    jpgCompressQuality(options['quality']),
    '-outfile',
    options['output'],
    options['input'],
  ];

  // 执行文件
  // execFile(mozjpeg, commandArs, err => {
  //   console.log(err !== null)
  //   if (err !== null) {
  //     console.log(11111)
  //     resp.code = ICode.FAILED;
  //     resp.reason = ICode[ICode.FAILED];
  //     resp.message = err.message;
  //     resp.metadata = err;
  //   }
  // });
  (async () => {
    await ExecCommand(mozjpeg, commandArs).then((value) => {
    }).catch((reason) => {
      console.log(reason)
      resp.code = ICode.FAILED;
      resp.reason = ICode[ICode.FAILED];
      const result = reason as IExecCommandResult;
      // 是执行响应结果
      if (IsIExecCommandResult(result)) {
        // 有错误 || 无错误
        if (result.error) {
          // 有错误
          resp.message = result.error.message;
          resp.metadata = result.error;
        } else if (result.stderr !== '') {
          // 有错误
          resp.message = result.stderr
        } else if (result.stdout !== '') {
          // 有输出
          resp.message = result.stdout
        } else {
          resp.message = "执行失败：" + JSON.stringify(options)
        }
      } else {
        // 不是执行错误
        resp.message = JSON.stringify(reason)
      }
    });
  })();
  return resp;
}

// jpgCompressQuality jpg压缩质量
function jpgCompressQuality(quality: number): string {
  if (quality < 0 || quality > 100) {
    return '100';
  }
  return quality.toString()
}
