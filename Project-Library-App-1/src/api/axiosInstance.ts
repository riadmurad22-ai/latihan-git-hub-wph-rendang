import axios from "axios";

const axiosInstance = axios.create({
  // HAPUS "/api-swagger" di ujungnya. Ganti jadi "/api" saja.
  // Ini adalah SATU-SATUNYA cara agar server mengirim data buku, bukan halaman web.
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
