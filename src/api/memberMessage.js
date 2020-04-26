import request from '@/utils/request'


// 获取用户消息列表
export const getMemberMessageList =
(page,perpage) => {
 return request({
    url: `/api/MemberMessage/get_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
      'page' : page,
      'per_page' : perpage
    },
    method: 'POST'
  })
}
