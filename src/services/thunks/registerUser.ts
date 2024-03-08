import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse, UserData } from '../../types/types';
import { RoutePath } from '../../utils/config/routeConfig';
import { ThunkConfig } from '../store';

export const registerUser = createAsyncThunk<AuthResponse, UserData, ThunkConfig<string>>(
  'auth/registerUser',
  async ({ email, password }, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.post<AuthResponse>(RoutePath.register, {
        email,
        password,
      });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem('token', data.accessToken);

      return data;
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message);
      return rejectWithValue('Ошибка');
    }
  },
);
