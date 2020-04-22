import request from '@/utils/request'
// 用户登录
const loginUrl = '/api/Login/index'
const wechatUrl = '/api/Wxauto/login'

export const login =
(userName, password) => {
 return request({
    url: `${loginUrl}`,
    params: {
      'username': userName,
      'password': password,
      'client_type': 'wap',
    },
    method: 'post'
  })
}
export const wechatLogin =
(ref, inviterId) => {
 return request({
    url: `${wechatUrl}`,
    params: {
      'ref': ref,
      'inviter_id': inviterId
    },
    method: 'get'
  })
}
