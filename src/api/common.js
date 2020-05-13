import request from '@/utils/request'
export const getSmsCaptcha =
(type,phone) => {
 // 1为注册, 2为登录, 3为找回密码, 4绑定手机, 5安全验证, 6报备带单, 7签约带单, 8招商加盟手机
 return request({
    url: `/api/Connect/get_sms_captcha`,
    params: {
      'type': type,
      'phone': phone
    },
    method: 'POST'
  })
}

export const checkCaptcha =
(captcha) => {
 // 验证短信验证码
 return request({
    url: `/api/Seccode/check`,
    params: {
      'captcha': captcha
    },
    method: 'POST'
  })
}
