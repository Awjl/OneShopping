import request from "@/utils/request";

// 获取用户公益信息
export function getSerinfoes() {
    return request({
        url: `/us/userinfoes`,
        method: 'get'
    });
}

// 获取我参加过的公益
export function getPloves() {
    return request({
        url: `/us/ploves/pass?pn=1&ps=20`,
        method: 'get'
    });
}

// 订单摘要
export function getSummary() {
    return request({
        url: `/td/orders/summary`,
        method: 'get'
    });
}

// 获取收藏列表
export function getFavoriate() {
    return request({
        url: `/us/catalogs/favoriate?pn=1&ps=20`,
        method: 'get'
    });
}

// 获取退款列表
export function getException() {
    return request({
        url: `/td/orders/exception?t=NORMAL&pn=1&ps=5`,
        method: 'get'
    });
}
// 获取订单列表
export function getOrders(tyoe) {
    return request({
        url: `/td/orders?${tyoe}pn=1&ps=10`,
        method: 'get'
    });
}

// 我的地址列表
export function getAddresses() {
    return request({
        url: `/us/users/addresses`,
        method: 'get'
    });
}

// 我的地址详情
export function getAddressesOne(id) {
    return request({
        url: `/us/users/addresses/${id}`,
        method: 'get'
    });
}

// 保存地址
export function addresses(data) {
    return request({
        url: "/us/users/addresses",
        method: "post",
        data: data
    });
}


// 点击设置默认地址并跳转到确认订单页
export function putDefault(id) {
    return request({
        url: `/us/users/addresses/${id}/default`,
        method: "put"
    });
}

// 获取 vip

// 我的地址详情
export function queryVipPlan() {
    return request({
        url: `/us/vip/queryVipPlan`,
        method: 'get'
    });
}

// 提交
export function wxJsApiPay(data) {
    return request({
        url: "/us/vip/wxJsApiPay",
        method: "post",
        data: data
    });
}