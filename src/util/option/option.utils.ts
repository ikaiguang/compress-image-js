import {responseUtil, IResponse} from '../response/response.util';
import {ICode} from "../response/respone_enum.util";

// ImageFormat 图片格式
export enum ImageFormat {PNG = "PNG"}

// Options 选项
export type Options = {
    format: ImageFormat,
    input: string,
    output: string,
}

// CheckCompressOptions 检查参数：选项
export function CheckCompressOptions(options: Options): IResponse {
    let resp: IResponse = responseUtil.DefaultIResponse()
    switch (options['format'].toUpperCase()) {
        case ImageFormat.PNG:
            break
        default:
            resp.code = ICode.STATUS_NOT_IMPLEMENTED
            resp.reason = ICode[ICode.STATUS_NOT_IMPLEMENTED]
            resp.message = "未实现的图片压缩"
            resp.metadata = {"format": options['format']}
    }
    return resp
}

