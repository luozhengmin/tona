import request from '@/utils/request'


// 获取文章分类
export const getArticleclass =
(page,perpage) => {
 return request({
    url: `/api/Articleclass/index`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {

    },
    method: 'POST'
  })
}

// 获取文章列表
export const getHelpCenter =
(ac_id) => {
 return request({
    url: `/api/Article/article_list`,
    // headers: {
    //    'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    // },
    params: {
      ac_id : ac_id

    },
    method: 'POST'
  })
}

// 获取文章详情
export const getArticleinfo = 
(article_id) => {
 return request({
    url: `/api/Article/article_show`,
    // headers: {
    //    'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    // },
    params: {

      article_id : article_id

    },
    method: 'POST'
  })
}