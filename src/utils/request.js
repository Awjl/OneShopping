import axios from "axios";
import store from "../store/index";
import { configData } from '@/utils/config'

// 创建axios实例
const service = axios.create({
  appId: configData.APP_ID,
  atk: configData.APP_ID,
  baseURL: "./api", // api的base_url
  timeout: configData.timeout // 请求超时时间
});

// 前置拦截器
service.interceptors.request.use(
  config => {
    config.headers["appId"] = config.appId;
    config.headers["atk"] = config.atk;
    if (store.getters.token) {
      config.headers["utk"] = configData.utk;
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
