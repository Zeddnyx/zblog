import axios from "axios";
import { config } from "./index";

const Axios = axios.create({
  baseURL: config.BASE_URL_API,
  timeout: 150000000,
  headers: {
    "Content-Type": "application/json",
    ApiKey: config.API_KEY,
  },
});

Axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }
}
