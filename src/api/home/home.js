import request from "@/utils/request";

// 获取banner
export function getBanner() {
  return request({
    url: `/cms/home/region`,
    method: 'get'
  });
}
// 获取专区列表
export function getHomeList() {
  return request({
    url: `/cms/blocks/home`,
    method: 'get'
  });
}

// 获取特惠专区
export function getPreferential(val) {
  return request({
    url: `/cms/cmsBlocks?sid=86&sp=${val}&pn=1&ps=20`,
    method: 'get'
  });
}
// 获取商品列表
export function geshopingList(val) {
  return request({
    url: `/cms/cmsBlocks/${val}`,
    method: 'get'
  });
}

// 获取商品详情
export function geshopingDetails(val) {
  return request({
    url: `/mt/catalogs/${val}`,
    method: 'get'
  });
}
// 获取推荐商品
export function geshopingRecommendList(val) {
  return request({
    url: `/mt/sites/86/catalogs?pn=1&ps=9&ca=${val}`,
    method: 'get'
  });
}
// 获取是否收藏
export function geshopingCatalogs(val) {  
  return request({
    url: `/us/catalogs/${val}/favoriate`,
    method: 'get'
  });
}
// 添加收藏
export function putGeshopingCatalogs(pid) {
  return request({
    url: `/us/catalogs/${pid}/favoriate`,
    method: 'put'
  });
}
// 取消关注
export function delGeshopingCatalogs(pid) {
  return request({
    url: `/us/catalogs/favoriate/${pid}`,
    method: 'delete'
  });
}


// 获取评论信息
export function gesComment(val) {
  return request({
    url: `/mt/catalogs/${val}/comments?st=5&pn=1&ps=20`,
    method: 'get'
  });
}
//  获取商品Sku
export function getSkus(pid, myarr) {
  return request({
    url: `/mt/catalogs/${pid}/skus/q?ids=${myarr}`,
    method: 'get'
  });
}
// 将商品加入购物车
export function postshopping(data) {
  return request({
    url: `/td/quotes`,
    method: 'post',
    data: data
  });
}
// 去支付页面
export function postPrepare(pid, data) {
  return request({
    url: `/td/catalogs/${pid}/prepare`,
    method: 'post',
    data: data
  });
}

// 购物车列表
export function getQuotes() {
  return request({
    url: `/td/quotes`,
    method: 'get'
  });
}

// 计算购物车
export function setQuotes(id, data) {
  return request({
    url: `/td/quotes/${id}/items/fee`,
    method: 'put',
    data: data
  });
}
// 删除购物车
export function removeQuotes(carId, itemId) {
  // return console.log(itemId, '异步');
  return request({
    url: `/td/quotes/${carId}/items/${itemId}`,
    method: 'delete',
  });
}

// 获取购物车订单
export function postCart(id, data) {
  // return console.log(itemId, '异步');
  return request({
    url: `/td/quotes/${id}/prepare`,
    method: 'post',
    data: data
  });
}