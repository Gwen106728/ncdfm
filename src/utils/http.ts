import axios from 'axios'
import { IObject, IFunction, IMethods } from '@/typings'
import qs from 'qs'
const TIME_OUT_MS: number = 60 * 1000 // 默认请求超时时间
axios.defaults.withCredentials = true
const handleResults = (response: any) => {
  const remoteResponse = response.data.data
  let result: IObject = {
    success: false,
    message: '',
    status: [],
    errorCode: '',
    data: null,
  }
  if (remoteResponse) {
    result.data = remoteResponse
  }
  return result
}
function handleUrl(url: string, data?: IObject) {
  url = `${process.env.VUE_APP_BASEURL}${url}${data ? '?' + qs.stringify(data) : ''}`
  return url
}

/*
 * @param data 参数列表
 * @return
 */
function handleParams(data: IObject) {
  return data
}
const request = (method: IMethods, url: string, data: IObject, response?: IFunction, exception?: IFunction) => {
  const params: IObject = {
    method,
    timeout: TIME_OUT_MS,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }
  if (method === 'GET') {
    params.url = handleUrl(url, data)
  } else {
    params.url = handleUrl(url)
    params.data = handleParams(data)
  }
  axios(params)
    .then(result => {
      response && response(handleResults(result))
    })
    .catch(error => {
      if (exception) {
        exception && exception(error)
      } else {
        console.log(error)
      }
    })
}

export default {
  /*
   * @param url
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  post: (url: string, data: IObject, response: IFunction, exception: IFunction) => {
    request('POST', url, data, response, exception)
  },
  get(url: string, data: IObject, response?: IFunction, exception?: IFunction) {
    request('GET', url, data, response, exception)
  },
}
