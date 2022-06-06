import {
  IImageAction,
  IImageFormat,
  IOptions,
} from '../util/option/option.utils';
import { IResponse, responseUtil } from '../util/response/response.util';
import { CompressPNG } from '../service/compress/compress_png.service';

// ExecCommand 执行命令
export function ExecCommand(options: IOptions): IResponse {
  // 执行
  switch (options['action']) {
    case IImageAction.COMPRESS:
      // 压缩图片
      return CompressImage(options);
    default:
      // 参数错误
      console.trace(
        '参数错误：无效的执行动作；options=',
        JSON.stringify(options)
      );
      return responseUtil.NewUnimplementedIResponse('参数错误');
  }
}

// CompressImage 压缩图片 适配器
export function CompressImage(options: IOptions): IResponse {
  switch (options['format']) {
    case IImageFormat.PNG:
      // 压缩PNG
      return CompressPNG(options);
    default:
      // 参数错误
      console.trace(
        '参数错误：无效的图片类型；options=',
        JSON.stringify(options)
      );
      return responseUtil.NewUnimplementedIResponse('参数错误');
  }
}
