import request from '@/utils/request'

// 获取商品列表
export const getGoodsList = (params) => {
  return request({
    url: `/api/Goods/goods_list`,
    data: params,
    method: 'POST'
  })
}

// 获取商品详情页
export const getGoodsDetail =
  (goodsid) => {
    return request({
      url: `/api/Goods/goods_detail`,
      params: {
        'goods_id': goodsid
      },
      method: 'POST'
    })
  }

// 收藏商品
export const collectGoods =
  (goodsid) => {
    return request({
      url: `/api/memberfavorites/favorites_add`,
      headers: {
        'X-DS-KEY': $cookies.get('token'),//设置请求头请求格式为JSON
      },
      data: {
        'goods_id': goodsid
      },
      method: 'POST'
    })
  }


// 获取商品评论列表
export const getGoodsEvaluateList =
  (goodsid, type, page, perpage) => {
    return request({
      url: `/api/Goods/goods_evaluate`,
      params: {
        'goods_id': goodsid,
        'goods_idtype': type,
        'page': page,
        'perpage': perpage,
      },
      method: 'POST'
    })
  }
