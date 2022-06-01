import {ICode} from './respone_enum.util';

// IResponse 响应
export type IResponse = {
    code: ICode,
    reason: string,
    message: string,
    data: any,
    metadata: Object
}

// DefaultIResponse 默认响应
export function DefaultIResponse(): IResponse {
    return {
        code: ICode.OK,
        reason: ICode[ICode.OK],
        message: "",
        data: {},
        metadata: {},
    }
}
