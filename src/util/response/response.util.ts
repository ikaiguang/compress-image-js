import {ICode} from "./respone_enum.util";

// IResponse 响应
export interface IResponse {
    code: ICode,
    reason: string,
    message: string,
    data: any,
    metadata?: {
        [key: string]: any;
    }
}

// ResponseUtil 响应工具
export class ResponseUtil {
    // DefaultIResponse 默认响应
    DefaultIResponse(): IResponse {
        return {
            code: ICode.OK,
            reason: ICode[ICode.OK],
            message: "",
            data: {},
            metadata: {},
        }
    }

    // NewIResponse 初始化一个响应
    NewIResponse(code: ICode): IResponse {
        return {
            code: code,
            reason: ICode[code],
            message: "",
            data: {},
            metadata: {},
        }
    }

    // IsOK 成功？
    IsOK(code: ICode): boolean {
        return code === ICode.OK
    }

    // IsInternalError 服务错误？
    IsInternalError(code: ICode): boolean {
        return code === ICode.STATUS_INTERNAL_SERVER
    }

    // Error 错误信息
    Error(err: IResponse): string {
        let s = `code=${err.code} reason=${err.reason} message=${err.message} metadata=`
        if (err.metadata !== undefined) {
            s += `${JSON.stringify(err.metadata)}`
        }
        return s
    }
}

// responseUtil 工具
export const responseUtil = new ResponseUtil();
