import request from '@/utils/request'

// 获取会员订单列表
export const memberOrderList =
(data) => {
 return request({
    url: `/api/Memberorder/order_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
   data: data,
    method: 'POST'
  })
}
