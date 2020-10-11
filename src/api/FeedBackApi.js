import request from '@/utils/request'

const baseUrl = '/api/Mbfeedback'

const FeedBackApi = {}

FeedBackApi.get = (params) => {
  return request({
    url: `${baseUrl}/index`,
    data: params,
    method: 'post'
  })
}
FeedBackApi.upload = (params) => {
  return request({
    url: `${baseUrl}/image_upload`,
    data: params,
    method: 'post'
  })
}
FeedBackApi.submit = (params) => {
  return request({
    url: `${baseUrl}/save_mbfeedback`,
    headers: {
      'X-DS-KEY': $cookies.get('token'),
    },
    data: params,
    method: 'post'
  })
}
export default FeedBackApi
