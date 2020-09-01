import request from '@/utils/request'

const baseUrl = '/api/Article'

const ArticleApi = {}

ArticleApi.articleShow = (params) => {
  return request({
    url: `${baseUrl}/article_show`,
    data: params,
    method: 'post'
  })
}

export default ArticleApi
