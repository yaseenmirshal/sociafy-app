import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL
});

console.log(process.env.NEXT_PUBLIC_HOST_URL);

instance.interceptors.request.use(
  (request) => {
    if (typeof window !== "undefined") {
      const adminToken = localStorage.getItem('token');
      if (adminToken) {
        request.headers.Authorization = `Bearer ${adminToken}`;
      }
    }
    console.log(request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
