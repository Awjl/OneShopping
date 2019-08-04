import request from "@/utils/request";

// 获取微信授权
export function getwxID(code, state) {
  return request({
    url: `/us/wx/mp/login?code=${code}&sate=${state}`,
    method: 'get'
  });
}
// 登录
export function login(data) {
  return request({
    url: "/us/3td/bind",
    method: "post",
    data: data
  });
}
// 获取验证码
export function getcode(phone) {
  return request({
    url: `/us/users/register/code?phone=${phone}`,
    method: "post"
  });
}

// 获取会员
export function getUserInfo() {
  return request({
    url: `/us/getUserInfo`,
    method: "get"
  });
}
