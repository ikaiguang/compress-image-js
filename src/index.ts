#!/usr/bin/env node
import { program } from 'commander';
import { CheckCompressOptions, IOptions } from './util/option/option.utils';
import { IResponse, responseUtil } from './util/response/response.util';
import { ExecCommand } from './adapter/exec.adapter';

// 解析参数
program
  .description('图片压缩工具')
  .option('-a, --action <执行动作>', '执行动作：压缩', 'compress')
  .option('-f, --format <图片类型>', '图片文件格式', '')
  .option('-i, --input <图片路径>', '图片输入路径', '')
  .option('-o, --output <图片路径>', '图片输出路径', '')
  .option('-q, --quality <图片质量>', '图片压缩质量：0-100', '0');
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
