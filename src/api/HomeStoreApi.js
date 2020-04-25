import request from '@/utils/request'

const StoreApi = {}

StoreApi.store = (params) => {
  return request({
    url: "/api/store/recommend_store?shownum=5",
    params: params,
    method: 'get'
  })
}

StoreApi.design = (params) => {
  return request({
    url: "/api/design/recommend_design",
    params: params,
    method: 'get'
  })
}
export default StoreApi
