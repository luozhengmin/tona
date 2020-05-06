import request from '@/utils/request'
const baseUrl = '/api/store'
const StoreApi = {}

StoreApi.store = (params) => {
  return request({
    url:`${baseUrl}/recommend_store?shownum=5`,
    params: params,
    method: 'get'
  })
}
StoreApi.storeArea = (params) => {
  return request({
    url:`${baseUrl}/get_store_area`,
    params: params,
    method: 'get'
  })
}
export default StoreApi
