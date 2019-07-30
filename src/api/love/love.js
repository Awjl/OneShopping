import request from "@/utils/request";

// 获取爱心列表
export function getPloves() {
    return request({
        url: `/us/ploves?type=1&pn=1&ps=10&st=0`,
        method: 'get'
    });
}
// 购买流程

// 获取地址信息
export function GetAddresses() {
    return request({
        url: `/us/users/addresses`,
        method: 'get'
    });
}
// 实时获取订单费用 /td/orders/quick/fee

export function PutQuickFee(data) {
    return request({
        url: `/td/orders/quick/fee`,
        method: 'put',
        data: data
    });
}
// 提交
export function PostH5(data) {
    return request({
      url: "/td/orders/quick/h5",
      method: "post",
      data: data
    });
  }
  // 获取wxJsApiPay
  export function GetWxJsApiPay(id) {
    return request({
        url: `/td/orders/${id}/wxJsApiPay`,
        method: 'get'
    });
}
