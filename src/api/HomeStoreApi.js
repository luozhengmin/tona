import request from '@/utils/request'
const baseUrl = '/api/store'
const StoreApi = {}

StoreApi.store = (params) => {
  return request({
    url: `${baseUrl}/recommend_store?shownum=5`,
    params: params,
    method: 'get'
  })
}
StoreApi.storeArea = (params) => {
  return request({
    url: `${baseUrl}/get_store_area`,
    params: params,
    method: 'get'
  })
}
StoreApi.storeBrand = (params) => {
  return request({
    url: `${baseUrl}/store_list`,
    params: params,
    method: 'post'
  })
}

StoreApi.storeInfo = (params) => {
  return request({
    url: `${baseUrl}/store_info`,
    data: params,
    method: 'post'
  })
}

StoreApi.productList = (params) => {
  return request({
    url: `${baseUrl}/store_goods`,
    data: params,
    method: 'post'
  })
}
StoreApi.designList = (id, params) => {
  return request({
    url: `${baseUrl}/designer_fan/store_id/${id}`,
    params: params,
    method: 'get'
  })
}
export default StoreApi
