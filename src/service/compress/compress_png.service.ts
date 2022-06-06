import { IOptions } from '../../util/option/option.utils';
import { IResponse, responseUtil } from '../../util/response/response.util';

// CompressPNG 压缩PNG
export function CompressPNG(options: IOptions): IResponse {
  let resp = responseUtil.DefaultIResponse();
  console.log(options);
  return resp;
}
