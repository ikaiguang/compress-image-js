// import {ICode} from './respone_enum.util';
//
// // IResponse 响应
// export type IResponse = {
//     code: ICode,
//     reason: string,
//     message: string,
//     data: any,
//     metadata?: {
//         [key: string]: any;
//     }
// }
//
// // DefaultIResponse 默认响应
// export function DefaultIResponse(): IResponse {
//     return {
//         code: ICode.OK,
//         reason: ICode[ICode.OK],
//         message: "",
//         data: {},
//         metadata: {},
//     }
// }
//
// // NewIResponse 初始化一个响应
// export function NewIResponse(code: ICode): IResponse {
//     return {
//         code: code,
//         reason: ICode[code],
//         message: "",
//         data: {},
//         metadata: {},
//     }
// }
