import axios from 'axios';
import { AuthResponse } from '../types/types';
import {
  REFRESH_PATH,
  TOKEN_KEY,
  UNAUTHORIZED_STATUS_CODE,
  baseURL,
} from '../utils/const';

export const $api = axios.create({
  // cookie к каждому запросу
  withCredentials: true,
  baseURL: baseURL,
  headers: {},
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status == UNAUTHORIZED_STATUS_CODE &&
      error.config &&
      !error.config._isRetry
    ) {
      // для повтора запроса только 1 раз
      originalRequest._isRetry = true;
      try {
        const { data } = await axios.get<AuthResponse>(`${baseURL}${REFRESH_PATH}`, {
          withCredentials: true,
        });
        localStorage.setItem(TOKEN_KEY, data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  },
);
