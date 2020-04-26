import request from '@/utils/request'
export const getSmsCaptcha =
(type,phone) => {
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
 return request({
    url: `/api/Seccode/check`,
    params: {
      'captcha': captcha
    },
    method: 'POST'
  })
}
