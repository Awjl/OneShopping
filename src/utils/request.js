import axios from "axios";
// import store from "../store/index";
import { configData } from '@/utils/config'

// 创建axios实例
const service = axios.create({
  appId: configData.APP_ID,
  atk: configData.atk,
  baseURL: "./api", // api的base_url，
  // baseURL: configData.API_GATEWAY, // 服务器端
  timeout: configData.timeout // 请求超时时间
});

// 前置拦截器
service.interceptors.request.use(
  config => {
    config.headers["appId"] = config.appId;
    config.headers["atk"] = config.atk;
    if (configData.IS_DEBUG) {
      config.headers["utk"] = configData.utk;
    } else {
      config.headers["utk"] = JSON.parse(window.sessionStorage.getItem('userData')) ? JSON.parse(window.sessionStorage.getItem('userData')).utk : null
    }
    return config;
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// 后置拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
