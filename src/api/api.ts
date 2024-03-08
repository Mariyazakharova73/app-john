import axios from 'axios';

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
