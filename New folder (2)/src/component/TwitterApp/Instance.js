import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://narminlt.beget.tech/api",
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("[API Request]", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      location.href = "/login";
      console.log("error");
    } else {
      console.log(error.response.data.message);
    }

    console.error("[API Error]", error);
    return Promise.reject(error);
  }
);

export default apiInstance;
