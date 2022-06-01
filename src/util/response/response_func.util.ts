import {ICode} from "./respone_enum.util";

// IsOK 成功？
function IsOK(code: ICode): boolean {
    return code === ICode.OK
}

// IsInternalError 服务错误？
function IsInternalError(code: ICode): boolean {
    return code === ICode.STATUS_INTERNAL_SERVER
}

// 导出
export default {
    IsOK,
    IsInternalError
}
