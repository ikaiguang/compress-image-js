import {IOptions} from '../../util/option/option.util.js';
import {IResponse, responseUtil} from '../../util/response/response.util.js';
import {CreateDirSyncFromFilename} from "../../util/file/file.util.js";
import {ExecCommandSync} from "../../util/cmd/cmd.util.js";
import {ICode} from '../../util/response/respone_enum.util.js';
import mozjpeg from 'mozjpeg';
import {ExecFileException} from "child_process";


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

  try {
    ExecCommandSync(mozjpeg, commandArs)
  } catch (e: any) {
    resp.code = ICode.FAILED
    resp.reason = ICode[ICode.FAILED]
    let err = e as ExecFileException
    if (err.message !== "") {
      resp.message = err.message
      resp.metadata = err
    } else {
      resp.message = "压缩JPG/JPEG失败：" + JSON.stringify(options)
    }
  }
  return resp
}

// jpgCompressQuality jpg压缩质量
function jpgCompressQuality(quality: number): string {
  if (quality < 0 || quality > 100) {
    return '100';
  }
  return quality.toString()
}
