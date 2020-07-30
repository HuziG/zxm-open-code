/*
 * @Descripttion:
 * @version:
 * @Author: dingjia z
 * @Date: 2020-04-03 16:44:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-04 16:37:07
 */
import axios from "axios";
import { getItem } from "./localstorage";
import { Message } from "element-ui";

declare module "axios" {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
  }
}

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";

    if (config.method === "post") {
      // config.data["token"] = getItem("token");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    const code = res.data.code;
    const message = res.data.msg || "意外错误";

    // fail
    if (code < 0) {
      Message({
        showClose: true,
        message,
        type: "error",
      });
      return Promise.reject(message);
    }

    // success
    return res.data;
  },
  (error) => {
    Message({
      showClose: true,
      message: "意外错误",
      type: "error",
    });
    return Promise.reject(new Error(error));
  }
);

export default axios;
