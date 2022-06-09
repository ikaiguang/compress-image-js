import { CompressPNG } from '../src/service/compress/compress_png.service.js';
import {
  IImageAction,
  IImageFormat,
  IOptions,
} from '../src/util/option/option.util.js';
import { ExistsSync, UnlinkSync } from '../src/util/file/file.util.js';
import { ICode } from '../src/util/response/respone_enum.util.js';

// 压缩PNG图片
describe('压缩PNG图片', () => {
  it('#压缩图片：./testdata/png/mbike.png', () => {
    let opt: IOptions = {
      action: IImageAction.COMPRESS,
      format: IImageFormat.PNG,
      input: './testdata/png/mbike.png',
      output: './testdata/png/mbike-80.png',
      quality: 80,
    };
    // 移除文件
    if (ExistsSync(opt.output)) {
      UnlinkSync(opt.output);
    }
    let resp = CompressPNG(opt);
    expect(resp.code).toEqual(ICode.OK);
  });
});
