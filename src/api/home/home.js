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
// 获取评论信息
export function gesComment(val) {
  return request({
    url: `/mt/catalogs/${val}/comments?st=5&pn=1&ps=20`,
    method: 'get'
  });
}   