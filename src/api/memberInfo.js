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

// 获取用户基本信息
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


// 获取用户地址列表
export const getMemberAddressList =
() => {
 return request({
    url: `/api/memberaddress/address_list`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    params: {},
    method: 'POST'
  })
}

// 获取用户地址详情
export const getMemberAddressInfo =
(addressid) => {

 return request({
    url: `/api/memberaddress/address_info`,
    headers: {
       'X-DS-KEY':$cookies.get('token'),
    },
    data: {
      'address_id':addressid
    },
    method: 'POST'
  })
}

// 修改收货地址
export const getMemberAddressEdit =
(params) => {

 return request({
    url: `/api/memberaddress/address_edit`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    data: params,
    method: 'POST'
  })
}

// 新增收货地址
export const getMemberAddressAdd =
(params) => {

 return request({
    url: `/api/memberaddress/address_add`,
    headers: {
       'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
    },
    data:params,
    method: 'POST'
  })
}


// 获取用户收藏列表
export const getMemberCollectlist =
(perpage,page) => {

 return request({
    url: `/api/memberfavorites/favorites_list`,
    headers: {
       'X-DS-KEY':$cookies.get('token'),
    },
    params: {
      'per_page':perpage,
      'page':page
    },
    method: 'POST'
  })
}

// 获取用户收藏设计方案
export const getMemberFangctlist =
(perpage,page) => {

 return request({
    url: `/api/memberfavorites/favorites_fan_list`,
    headers: {
       'X-DS-KEY':$cookies.get('token'),
    },
    params: {
      'per_page':perpage,
      'page':page
    },
    method: 'GET'
  })
}
