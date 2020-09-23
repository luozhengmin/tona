import request from '@/utils/request'


// 获取用户未读消息数量
export const getMessageisreadList =
(message_type) => {
 return request({
    url: `/api/member_message/show_received_new_num`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
      'message_type' : message_type,
    },
    method: 'GET'
  })
}


// 获取用户消息列表 - 系统消息
export const getMemberMessageList =
(page,perpage) => {
 return request({
    url: `/api/member_message/get_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
      'page' : page,
      'per_page' : perpage,
      message_type:1
    },
    method: 'GET'
  })
}

// 获取用户消息列表 - 私信
export const getPrivateMessageList =
  (page,perpage) => {
    return request({
      url: `/api/member_message/get_list`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
      },
      params: {
        'page' : page,
        'per_page' : perpage,
        message_type:0
      },
      method: 'GET'
    })
  }

// 获取用户消息列表 - 私信清空
export const getPrivateALL =
  () => {
    return request({
      url: `/api/member_message/message_del`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
      },
      data: {
        type:0
      },
      method: 'POST'
    })
  }

// 获取用户消息列表 - 私信详情对话框
export const getPrivateDetail =
  (params) => {
    return request({
      url: `/api/member_message/privatemsg`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
      },
      params:params,
      method: 'GET'
    })
  }
// 获取用户消息列表 - 活动消息
export const getMemberActiveList =
(page,perpage) => {
 return request({
    url: `/api/member_message/hd_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
      'page' : page,
      'per_page' : perpage
    },
    method: 'GET'
  })
}


// 获取活动信息详情
export const getMemberActiveDetail =
(hd_id) => {
 return request({
    url: `/api/member_message/hd_show`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
      'hd_id' : hd_id,
    },
    method: 'GET'
  })
}
