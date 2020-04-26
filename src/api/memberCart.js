import request from '@/utils/request'

// 获取用户购物车信息
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
// 获取用户购物车信息
export const getGuesslike =
() => {
 return request({
    url: `/api/goods/get_guesslike`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
    
    },
    method: 'POST'
  })
}
