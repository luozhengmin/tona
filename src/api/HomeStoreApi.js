import request from '@/utils/request'
const baseUrl = '/api/store'
const StoreApi = {}

StoreApi.store = (params) => {
  return request({
    url:`${baseUrl}/recommend_store`,
    params: params,
    method: 'get'
  })
}
export default StoreApi
