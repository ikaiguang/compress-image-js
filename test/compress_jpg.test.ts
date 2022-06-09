import { CompressJPG } from '../src/service/compress/compress_jpg.service.js';
import {
  IImageAction,
  IImageFormat,
  IOptions,
} from '../src/util/option/option.util.js';
import { ExistsSync, UnlinkSync } from '../src/util/file/file.util.js';
import { ICode } from '../src/util/response/respone_enum.util.js';

// 压缩JPG/JPEG图片
describe('压缩JPG/JPEG图片', () => {
  it('#压缩JPG/JPEG图片：./testdata/jpg/picture.jpeg', () => {
    let opt: IOptions = {
      action: IImageAction.COMPRESS,
      format: IImageFormat.PNG,
      input: './testdata/jpg/picture.jpeg',
      output: './testdata/jpg/picture-80.jpeg',
      quality: 80,
    };
    // 移除文件
    if (ExistsSync(opt.output)) {
      UnlinkSync(opt.output);
    }
    let resp = CompressJPG(opt);
    expect(resp.code).toEqual(ICode.OK);
  });
});
