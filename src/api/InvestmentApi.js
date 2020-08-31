import request from '@/utils/request'

// const baseUrl = '/api/Investment'

const InvestmentApi = {}

InvestmentApi.sendSms = (params) => {
  return request({
    url: "/api/Connect/get_sms_captcha",
    data: params,
    method: 'post'
  })
}

InvestmentApi.submit = (params) => {
  return request({
    url: "/api/Mall_Consult/add_mallconsult",
    data: params,
    method: 'post'
  })
}
export default InvestmentApi
