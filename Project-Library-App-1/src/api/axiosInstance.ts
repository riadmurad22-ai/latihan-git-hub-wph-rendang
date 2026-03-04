import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://library-backend-production-b9cf.up.railway.app/api-swagger",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
