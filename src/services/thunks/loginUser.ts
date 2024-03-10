import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  ErrorNotification,
  InfoNotification,
} from '../../components/Notifications/Notification';
import { AuthResponse, UserData } from '../../types/types';
import { RoutePath } from '../../utils/config/routeConfig';
import { TOKEN_KEY, baseURL } from '../../utils/const';
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
      localStorage.setItem(TOKEN_KEY, data.accessToken);
      InfoNotification('Вы успешно авторизованы!');
      return data;
    } catch (e) {
      //@ts-ignore
      ErrorNotification(e.response?.data?.message);
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
      localStorage.removeItem(TOKEN_KEY);
      InfoNotification('Вы вышли из аккаунта!');
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
      localStorage.setItem(TOKEN_KEY, data.accessToken);
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
