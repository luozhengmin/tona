import request from '@/utils/request'
// 用户登录
const loginUrl = '/api/Login/index'
const wechatUrl = '/api/Wxauto/login'

// 密码登录
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
// 微信登录
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

// 验证码登录
export const yzmlogin =
(userName, password) => {
 return request({
    url: `api/Connect/sms_login`,
    data: {
      'usermobile': userName,
      'mobilecode': password,
      'client': 'wap',
    },
    method: 'post'
  })
}
