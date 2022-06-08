import {responseUtil, IResponse} from '../response/response.util';
import {ICode} from '../response/respone_enum.util';

// IImageFormat 图片格式
export enum IImageFormat {
  PNG = 'png',
  JPG = 'jpg',
  JPEG = 'jpeg',
}

// IImageAction 执行动作
export enum IImageAction {
  COMPRESS = 'compress',
}

// IOptions 选项
export type IOptions = {
  action: IImageAction;
  format: IImageFormat;
  input: string;
  output: string;
  quality: number;
};

// CheckCompressOptions 检查参数：选项
export function CheckCompressOptions(options: IOptions): IResponse {
  let resp: IResponse = responseUtil.DefaultIResponse();

  // 执行动作
  // console.log(options)
  switch (options['action'].toLowerCase()) {
    case IImageAction.COMPRESS:
      break;
    default:
      resp.code = ICode.STATUS_NOT_IMPLEMENTED;
      resp.reason = ICode[ICode.STATUS_NOT_IMPLEMENTED];
      resp.message = '未实现';
      resp.metadata = {action: options['action']};
      return resp;
  }

  // 图片类型
  switch (options['format'].toLowerCase()) {
    case IImageFormat.PNG:
      break;
    case IImageFormat.JPG:
      break
    case IImageFormat.JPEG:
      break
    default:
      resp.code = ICode.STATUS_NOT_IMPLEMENTED;
      resp.reason = ICode[ICode.STATUS_NOT_IMPLEMENTED];
      resp.message = '未实现的图片压缩';
      resp.metadata = {format: options['format']};
      return resp;
  }
  return resp;
}
