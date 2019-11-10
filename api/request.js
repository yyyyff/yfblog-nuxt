import axios from "axios"
import * as config from "~/config"
import { Toast } from "~/components/toast"
const instance = axios.create({
  baseURL: config.API_Root
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (!error.response) {
      if (error.message.includes("timeout")) {
        Toast("请求超时了，请稍后重试")
      } else {
        Toast("请检查网络状况")
      }
    } else {
      Toast(error.response.msg) // TODO 只是简单的处理了错误
    }
    return Promise.reject(error)
  }
)

export default instance
