import router from "@/router";
import { useUserStoreA } from "@/store/module/user";
import axios from "axios";

// 创建axios实例
const request = axios.create({
  timeout: 1000 * 30,
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// request拦截器
request.interceptors.request.use(
  (config) => {
    // 添加头
    config.headers["Authorization"] = localStorage.getItem("token") ?? "";
    let timestamp = new Date().getTime();

    // 添加全局GET参数 _t=时间戳
    if (config.params) {
      config.params._t = timestamp;
    } else {
      config.params = {
        _t: timestamp,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response拦截器
request.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code === 401) {
      let userStore = useUserStoreA();
      userStore.setToken("");
      // 跳转到登录页面
      router.push("/login");
    }
    return response.data;
  },
  (error) => {
    const res = error.response;
    if (res && res.status == 500) {
      switch (res.status) {
        case 401:
          let userStore = useUserStoreA();
          userStore.setToken("");
          // 跳转到登录页面
          router.push("/login");
          return {
            message: error.message,
            code: res.status,
            data: null,
          };
        case 500:
          return {
            message: "服务器异常",
            code: res.status,
            data: null,
          };
        case 501:
          return {
            message: "您的操作被取消或不运行提交",
            code: res.status,
            data: null,
          };

        default:
          return {
            message: "服务器在开小差",
            code: res.status,
            data: null,
          };
      }
    }

    return Promise.reject(error);
  }
);

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return request({
    method: "post",
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, params = {}) => {
  return request({
    method: "get",
    url,
    params,
  });
};

export default request;
