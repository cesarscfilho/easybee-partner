import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL;

export const api = axios.create({
  baseURL,
});

export function updateHeaders(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
