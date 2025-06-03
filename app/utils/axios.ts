import axios from "axios";

import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { config } from "@/app/constants/config";

const axiosInstance = axios.create({
  baseURL: `${config.base_url}`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    // config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.status === 200 || response.status === 201) {
      return response;
    }

    if (response.data?.status === "failed") {
      console.error(response.config.url, response.data.data);
      return await Promise.reject(new Error(response.data.errors));
    }

    console.error("Unknown server response:", response.data.data);
    return await Promise.reject(new Error("An error occurred."));
  },
  async (error: AxiosError) => {
    // console.error(
    //   error.response.config.url,
    //   `Error code: ${error.response.status}`,
    //   `Server error message: ${logError(error.response)}`
    // );

    return await Promise.reject(error.response);
  }
);

export default axiosInstance;
