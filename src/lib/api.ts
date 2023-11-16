import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
});

export const setDefaultHeaders = (token: string) => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
