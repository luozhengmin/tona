import request from '@/utils/request'

// 用户退出登录
export const logout =
(username) => {
 return request({
    url: `/api/Logout/index`,
    headers: {
       'Content-Type': 'application/json',//设置请求头请求格式为JSON
    },
    params: {
      'username': username,
      'client_type': 'wap',
    },
    method: 'POST'
  })
}

// 获取用户基本信息-首页
export const getMemberInfo =
() => {
 return request({
    url: `/api/Member/index`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {},
    method: 'POST'
  })
}

export const getMemberdetailInfo =
() => {
 return request({
    url: `/api/Member/information`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {},
    method: 'POST'
  })
}

// 用户基本信息修改
export const updateMemberInfo =
(member_nickname,member_qq,member_ww,member_birthday) => {
 return request({
    url: `/api/Member/edit_information`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {
        'member_nickname' : member_nickname,
        'member_qq' : member_qq,
        'member_ww' : member_ww,
        'member_birthday' : member_birthday
    },
    method: 'POST'
  })
}
