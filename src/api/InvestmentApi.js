import request from '@/utils/request'

const baseUrl = '/api/Investment'

const InvestmentApi = {}

InvestmentApi.list = (params) => {
  return request({
    url: `${baseUrl}`,
    params: params,
    method: 'post'
  })
}

export default InvestmentApi
