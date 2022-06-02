import {program} from 'commander';
import {CheckCompressOptions, IOptions} from './util/option/option.utils';
import {IResponse, responseUtil} from './util/response/response.util';
import {ExecCommand} from "./adapter/exec.adapter";

program
    .description('图片压缩工具')
    .option('-f, --action <执行动作>', "执行动作：压缩", "compress")
    .option('-f, --format <图片类型>', "图片文件格式", "")
    .option('-i, --input <图片路径>', "图片输入路径", "")
    .option('-o, --output <图片路径>', "图片输出路径", "");

program.parse();

let options: IOptions = program.opts();

// 检查参数
let checkOptionResult: IResponse = CheckCompressOptions(options)
if (!responseUtil.IsOK(checkOptionResult.code)) {
    console.trace("参数错误 : ", responseUtil.Error(checkOptionResult))
}

// 执行命令
let execResponse: IResponse = ExecCommand(options)
if (!responseUtil.IsOK(execResponse.code)) {
    console.trace("执行失败 : ", responseUtil.Error(checkOptionResult))
}
console.log("执行成功")
