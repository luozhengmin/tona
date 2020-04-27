import request from '@/utils/request'

const baseUrl = '/api/mendian'

const GlobalStoreApi = {}

GlobalStoreApi.city = (params) => {
  return request({
    url: `${baseUrl}/mendian_region_list`,
    params: params,
    method: 'get'
  })
}

GlobalStoreApi.list = (params) => {
  return request({
    url: `${baseUrl}/mendian_list`,
    params: params,
    method: 'get'
  })
}

GlobalStoreApi.yuyue = (params) => {
  return request({
    url: `${baseUrl}/mendian_list`,
    data: params,
    method: 'post'
  })
}

export default GlobalStoreApi