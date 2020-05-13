import axios from 'axios'
import router from '../router'

const request = axios.create({
  timeout: 10000,
  withCredentials: true
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  res => {
    if (res.data.code == 10000) {
      return res.data;
    } else if (res.data.code == 11001) { // 需要登录
      router.push({ path: "/mima-login" });
    } else {
      return res.data;
    }
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
)

export default request
