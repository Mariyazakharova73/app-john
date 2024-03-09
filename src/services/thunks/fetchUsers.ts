import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/types';
import { ThunkConfig } from '../store';

export const fetchUsers = createAsyncThunk<User[], void, ThunkConfig<string>>(
  'data/fetchUsers',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.get<User[]>('/users');

      if (!data) {
        throw new Error();
      }
      return data;
    } catch (e) {
      // @ts-ignore
      console.log(e.response?.data?.message);
      return rejectWithValue('Ошибка');
    }
  },
);
