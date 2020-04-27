import request from '@/utils/request'

const baseUrl = '/api/design'

const DesignApi = {}
/*推荐设计*/
DesignApi.list = (params) => {
  return request({
    url: `${baseUrl}/recommend_design`,
    params: params,
    method: 'get'
  })
}

DesignApi.get = (params) => {
  return request({
    url: `${baseUrl}/designdetail`,
    params: params,
    method: 'get'
  })
}

DesignApi.consult = (params) => {
  return request({
    url: `/api/Mall_Consult/add_fan_consult`,
    data: params,
    method: 'post'
  })
}
DesignApi.collect = (params) => {
  return request({
    url: `/api/memberfavorites/favoritesfan`,
    data: params,
    method: 'post'
  })
}

DesignApi.active = (params) => {
  return request({
    url: `${baseUrl}/zhuanti?page`,
    params: params,
    method: 'get'
  })
}

DesignApi.activeDetail = (params) => {
  return request({
    url: `${baseUrl}/zhuanti_show?zhuanti_id=4`,
    params: params,
    method: 'get'
  })
}
export default DesignApi
