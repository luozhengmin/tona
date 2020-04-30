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
    url: `${baseUrl}/yuyue`,
    data: params,
    method: 'post'
  })
}

GlobalStoreApi.upload = (params) => {
  return request({
    url: `/api/fileupload/upload`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data"
    },
    method: 'post'
  })
}

export default GlobalStoreApi
