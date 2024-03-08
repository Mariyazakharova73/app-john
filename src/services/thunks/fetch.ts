import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../store';

export const fetch = createAsyncThunk<any, void, ThunkConfig<string>>(
  'app/fetch',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const { data } = await extra.api.post<any>('/');

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
