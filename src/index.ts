#!/usr/bin/env node
import {program} from 'commander';
import {CheckCompressOptions, IOptions} from './util/option/option.util.js';
import {IResponse, responseUtil} from './util/response/response.util.js';
import {ExecCommand} from './adapter/exec.adapter.js';

// 解析参数
program
  .description(
    `图片压缩工具；
    例子 For JPG/JPEG ： compress-picture-js -f jpg -q 80 -i ./images/a.jpeg -o ./images/compress/a.jpeg
    例子 For PNG      ： compress-picture-js -f png -q 80 -i ./images/a.png -o ./images/compress/a.png
`
  )
  .option('-a, --action <执行动作>', '执行动作：压缩', 'compress')
  .option('-f, --format <图片类型>', '图片文件格式', '')
  .option('-i, --input <图片路径>', '图片输入路径', '')
  .option('-o, --output <图片路径>', '图片输出路径', '')
  .option('-q, --quality <图片质量>', '图片压缩质量：0-100', '0')
  .version('0.0.7', '-v, --version');
program.parse();

// 检查参数
let options: IOptions = program.opts();
let checkOptionResult: IResponse = CheckCompressOptions(options);
if (!responseUtil.IsOK(checkOptionResult.code)) {
  throw new Error('参数错误 : ' + responseUtil.Error(checkOptionResult));
}

// 执行命令
let execResponse: IResponse = ExecCommand(options);
if (!responseUtil.IsOK(execResponse.code)) {
  throw new Error('执行失败 : ' + responseUtil.Error(execResponse));
}
// console.log('✨ ✨ 🚀 Done.');
