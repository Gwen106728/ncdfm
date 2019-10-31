import http from '@/utils/http'
import { IObject, IFunction, IMethods } from '@/typings'
const aa = process.env.VUE_APP_BASEURL

export const login = (data: IObject, callback: IFunction, errorback: IFunction = () => void 0) =>
  http.get('/api/v1/auth/wx/link', data, callback, errorback)

export const getOrder = (data: IObject = {}, callback?: IFunction, errorback: IFunction = () => void 0) =>
  http.get('/order', data, callback, errorback)
