import request from '@/utils/request'


// 获取用户购物车商品数量
export const cartNumGet =
() => {
 return request({
    url: `/api/Membercart/cart_count`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {

    },
    method: 'POST'
  })
}

// 获取用户购物车商品信息
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

// 添加到购物车
export const setGoodsInCart =
(goods_id,quantity,bl_id) => {

 return request({
    url: `/api/membercart/cart_add`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),  //设置请求头Token
    },
    data: {
      'goods_id' : goods_id,
      'quantity' : quantity,
      'bl_id' : bl_id
    },
    method: 'post'
  })
}

// 获取用户猜你喜欢列表
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
