import { createAsyncThunk } from '@reduxjs/toolkit';
import { default as request } from 'axios';
import {
  ErrorNotification,
  InfoNotification,
} from '../../components/Notifications/Notification';
import { AuthResponse, UserData } from '../../types/types';
import { RoutePath } from '../../utils/config/routeConfig';
import { TOKEN_KEY } from '../../utils/const';
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

      localStorage.setItem(TOKEN_KEY, data.accessToken);
      InfoNotification('Вы успешно зарегистрировались!');
      return data;
    } catch (e) {
      if (request.isAxiosError(e) && e.response) {
        ErrorNotification(e.response?.data?.message);
      }
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
