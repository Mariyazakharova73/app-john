import axios from 'axios';
import { baseURL } from '../utils/constants';
import { createAuthData } from '../utils/helpers';

export const instance = axios.create({
  baseURL: baseURL,
  headers: { 'X-Auth': createAuthData() },
});