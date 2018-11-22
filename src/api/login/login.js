import request from "@/utils/request";

// 登录
export function login(phone, password) {
  return request({
    url: "/us/admin/login",
    method: "post",
    data: {
      phone,
      password
    }
  });
}
// 获取验证码
export function getcode(phone) {
  return request({
    url: `/us/users/register/code?phone=${phone}`,
    method: "post"
  });
}

// 注册
export function getRegistered(data) {
  return request({
    url: `/us/users/register`,
    method: "post",
    data
  });
}