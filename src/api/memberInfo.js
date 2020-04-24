import request from '@/utils/request'

// 用户退出登录
export const logout =
(username) => {
 return request({
    url: `/api/Logout/index`,
    headers: {
       'Content-Type': 'application/json',//设置请求头请求格式为JSON
    },
    params: {
      'username': username,
      'client_type': 'wap',
    },
    method: 'POST'
  })
}

// 获取用户基本信息
export const getMemberInfo =
() => {
 return request({
    url: `/api/Member/information`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {},
    method: 'POST'
  })
}
