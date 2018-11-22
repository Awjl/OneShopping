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