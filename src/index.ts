import {program} from 'commander';
import {IResponse} from "./util/response/response_type.util";
import {Options, CheckCompressOptions} from './util/option/option.utils';
import responseUtil from './util/response/response_func.util'


program
    .description('图片压缩工具')
    .option('-f, --format <图片类型>', "图片文件格式", "")
    .option('-i, --input <图片路径>', "图片输入路径", "")
    .option('-o, --output <图片路径>', "图片输出路径", "");

program.parse();

let options: Options = program.opts();

// 检查参数
let checkOptionResult: IResponse = CheckCompressOptions(options)
if (!responseUtil.IsOK(checkOptionResult.code)) {
    console.trace(checkOptionResult.reason)
}
