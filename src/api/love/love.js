import request from "@/utils/request";

// 获取爱心列表
export function getPloves() {
    return request({
        url: `/us/ploves?type=1&pn=1&ps=10&st=0`,
        method: 'get'
    });
}
