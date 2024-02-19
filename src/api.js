import axios from "axios";
const baseURL = "http://localhost:3000";
// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: baseURL,
});
console.log(api);

// 요청 인터셉터 추가
api.interceptors.request.use(
  (config) => {
    console.log("요청합니다.");
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  (response) => {
    console.log("응답입니다.");
    return response;
  },
  (error) => {
    return console.log(error);
  }
);

export default api;
