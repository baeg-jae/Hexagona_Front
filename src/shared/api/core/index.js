import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

api.interceptors.request.use(
  (data) => {
    data.headers.Authorization = localStorage.getItem("Authorization");

    return data;
  },
  (error) => {
    alert("api.interceptors.request 에러: " + error);
  }
);

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
