import axios from 'axios'

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
