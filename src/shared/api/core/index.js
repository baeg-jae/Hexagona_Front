import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 3000,
});

api.interceptors.request.use(
  (data) => {
    // 보낼거 처리
    // config.headers["Content-Type"] = "application/json; charset=utf-8";
    // config.headers["X-Requested-With"] = "XMLHttpRequest";
    // config.headers.Accept = "application/json";
    data.headers.token = localStorage.getItem("Authorization");

    return data;
  },
  (error) => {
    alert("api.interceptors.request 에러: " + error);
  }
);

// Response에 관한 Interceptor
// 우리가 받을거에 관련된거다,  401오류 처리를 axios를 전역으로 관리
api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
