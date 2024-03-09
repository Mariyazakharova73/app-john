import axios from 'axios';
import { AuthResponse } from '../types/types';
import { UNAUTHORIZED_STATUS_CODE } from '../utils/const';

export const baseURL = 'http://localhost:5000';

export const $api = axios.create({
  // cookie к каждому запросу
  withCredentials: true,
  baseURL: baseURL,
  headers: {},
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
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
        const { data } = await axios.get<AuthResponse>(`${baseURL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('Пользователь не авторизован');
      }
    }
    throw error;
  },
);
