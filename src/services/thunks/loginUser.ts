import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseURL } from '../../api/api';
import { AuthResponse, UserData } from '../../types/types';
import { RoutePath } from '../../utils/config/routeConfig';
import { ThunkConfig } from '../store';

export const loginUser = createAsyncThunk<AuthResponse, UserData, ThunkConfig<string>>(
  'auth/loginUser',
  async ({ email, password }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.post<AuthResponse>(RoutePath.login, {
        email,
        password,
      });

      if (!data) {
        throw new Error();
      }
      localStorage.setItem('token', data.accessToken);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);

export const logout = createAsyncThunk<void, void, ThunkConfig<string>>(
  'auth/logout',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.post<any>('/logout');
      if (!data) {
        throw new Error();
      }
      localStorage.removeItem('token');
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);

export const checkAuth = createAsyncThunk<AuthResponse, void, ThunkConfig<string>>(
  'auth/checkAuth',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<AuthResponse>(`${baseURL}/refresh`, {
        withCredentials: true,
      });

      if (!data) {
        throw new Error();
      }
      localStorage.setItem('token', data.accessToken);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
