import request from '@/utils/request'

const baseUrl = '/api/admin/banner'

const bannerApi = {}

bannerApi.findAll = (params) => {
  return request({
    url: `${baseUrl}`,
    params: params,
    method: 'get'
  })
}

bannerApi.page = (params) => {
  return request({
    url: `${baseUrl}/page`,
    params: params,
    method: 'get'
  })
}

bannerApi.get = bannerId => {
  return request({
    url: `${baseUrl}/${bannerId}`,
    method: 'get'
  })
}

bannerApi.group = () => {
  return request({
    url: `${baseUrl}/group`,
    method: 'get'
  })
}

bannerApi.update = (params) => {
  return request({
    url: `${baseUrl}`,
    data: params,
    method: 'put'
  })
}

bannerApi.create = banner => {
  return request({
    url: baseUrl,
    data: banner,
    method: 'post'
  })
}

bannerApi.delete = bannerId => {
  return request({
    url: `${baseUrl}/${bannerId}`,
    method: 'delete'
  })
}

export default bannerApi
