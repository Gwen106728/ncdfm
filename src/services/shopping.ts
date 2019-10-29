import http from "@/utils/http";
import { IObject, IFunction, IMethods } from "@/typings";
const aa = process.env.VUE_APP_BASEURL;

export const getAppId = (
  data: IObject,
  callback: IFunction,
  errorback: IFunction = () => void 0
) =>
  http.get(
    "/api/v1/auth/wx/config",
    data,
    callback,
    errorback
  );
export default aa;
