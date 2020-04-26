import request from '@/utils/request'

export const cartGet =
() => {
 return request({
    url: `/api/Membercart/cart_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {

    },
    method: 'POST'
  })
}
