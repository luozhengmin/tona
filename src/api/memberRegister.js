import request from '@/utils/request'
// 用户注册
const registerUrl = '/api/Connect/sms_register'

export const registerBymobile =
(phone,captcha, password,passwordConfirm,inviter_id,client) => {
 return request({
    url: `${registerUrl}`,
    data: {
      'phone': phone,
      'captcha': captcha,
      'password': password,
      'password_confirm': passwordConfirm,
      'inviter_id': inviter_id,
      'client': 'wap',
    },
    method: 'POST'
  })
}
