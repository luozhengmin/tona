import request from '@/utils/request'
// 用户登录
const baseUrl = '/api/Document/agreement'

export const protocol =
(type ) => {
 return request({
    url: `${baseUrl}`,
    params: {
      'type ': type,
    },
    method: 'post'
  })
}
