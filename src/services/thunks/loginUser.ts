import { createAsyncThunk } from '@reduxjs/toolkit';
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
      localStorage.remove('token');
      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
