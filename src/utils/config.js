export const configData = {
    IS_DEBUG: false,// 是否调试模式,线上为 false,
    secret: '27b511b52ccc0787c54ffd44a28f39d5', // 密钥
    codeState: 0, // 请求状态
    APP_ID: 10000, // 类型 前端
    timeout: 15000, // 超时
    API_GATEWAY: 'http://www.mayeinfo.com/pet',  // 公共ip
    ALI_OSS_GATEWAY: 'http://alioss.mildland.cn', // 公共镜像oss
    atk: 'p1P4fNO7eQjnx1pjNjGREHVxqg4j28h3lAc3WYbPdJcn/6BdxIqXOn/98+EaLW7vrtstIvWK6lzPm5brwyWcSQ==', // atonk
    utk: 'wUkMhTchUyqBA+gO5NSQwdVVDOJ9Kdv2D7qF0PHjITbeUmP7zR/L7OrM0NVmpRTC', // utk
};

export function changetime2(shijianchuo) {//mm-dd hh:mm
    function add0(m) { return m < 10 ? '0' + m : m };
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
}

export function changetime1(shijianchuo) { //时间戳转换成时间
    function add0(m) { return m < 10 ? '0' + m : m };
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d);
}

export function getUrlParam(key) { //获取地址栏参数
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
