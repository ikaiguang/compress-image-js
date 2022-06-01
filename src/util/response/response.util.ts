import {ICode} from './respone_enum.util';
import responseUtil from './response_func.util';
import {IMessage} from "./response_message.util";
import {DefaultIResponse} from "./response_type.util";

export default {
    ICode: ICode,
    IMessage: IMessage,
    IsOK: responseUtil.IsOK,
    IsInternalError: responseUtil.IsInternalError,
    DefaultIResponse: DefaultIResponse,
}
