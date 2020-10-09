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
  (params) => {
    return request({
      url: `/api/Member/edit_information`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
      },
      data: params,
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
        'X-DS-KEY': $cookies.get('token'),
      },
      data: {
        'address_id': addressid
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
      data: params,
      method: 'POST'
    })
  }


// 获取用户收藏列表
export const getMemberCollectlist =
  () => {

    return request({
      url: `/api/memberfavorites/favorites_list`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      data: {

      },
      method: 'POST'
    })
  }

// 获取用户收藏设计方案
export const getMemberFangctlist =
  (perpage, page) => {

    return request({
      url: `/api/memberfavorites/favorites_fan_list`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      params: {
        'per_page': perpage,
        'page': page
      },
      method: 'GET'
    })
  }

// 获取用户积分
export const getMemberScoreList =
  (page, mx) => {

    return request({
      url: `/api/Memberpoints/pointslog`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      params: {
        'page': page,
        'mx': mx
      },
      method: 'GET'
    })
  }

//获取用户浏览记录
export const getMemberbrowseList =
  (page, mx) => {

    return request({
      url: `/api/Membergoodsbrowse/browse_list`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      params: {
        'page': page,
        'mx': mx
      },
      method: 'GET'
    })
  }

// 清空用户浏览记录
export const setMemberbrowseClear =
  () => {

    return request({
      url: `/api/membergoodsbrowse/browse_clearall`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      params: {

      },
      method: 'GET'
    })
  }

// 会员退出登录
export const setMemberLogout =
  (userName) => {
    return request({
      url: `/api/Logout/index`,
      params: {
        'username': userName,
        'client': 'wap',
      },
      method: 'post'
    })
  }

// 会员忘记密码
export const setMemberPassword =
  (phone, captcha, password) => {
    return request({
      url: `/api/Connect/find_password`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),
      },
      params: {
        'phone': phone,
        'captcha': captcha,
        'password': password,
        'client': 'wap',
      },
      method: 'post'
    })
  }
