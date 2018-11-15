import axios from "axios";
import { getUtk } from "@/utils/auth";
import store from "../store/index";

// 创建axios实例
const service = axios.create({
  appId: 10000,
  atk:
    "p1P4fNO7eQjnx1pjNjGREExIrf3LpTy/LIk2OAfipcb+fmRGrXcG71ruh04dZSoEiN7fjduyrdd6qy9NON4DHQ==",
  baseURL: "http://10.1.50.183:8080", // api的base_url
  timeout: 15000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers["appId"] = config.appId;
    config.headers["atk"] = config.atk;
    if (store.getters.token) {
      config.headers["utk"] = getUtk();
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
