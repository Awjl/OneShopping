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
