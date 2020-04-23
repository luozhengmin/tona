import request from '@/utils/request'

const baseUrl = '/api/Goodsclass'

const GoodsClassApi = {}

GoodsClassApi.list = (params) => {
  return request({
    url: `${baseUrl}/index`,
    params: params,
    method: 'post'
  })
}

export default GoodsClassApi
