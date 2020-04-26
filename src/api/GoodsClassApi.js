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

GoodsClassApi.recommendClass = (params) =>{
  return request({
    url: `/api/Goodsclass/getRecommendClass`,
    params: params,
    method: 'POST'
  })
}

export default GoodsClassApi
