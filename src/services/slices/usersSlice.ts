import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/types';
import { fetchUsers } from '../thunks/fetchUsers';

export interface userState {
  isLoading: boolean;
  error?: string;

  users: User[] | null;
}

const initialState: userState = {
  isLoading: false,
  error: undefined,

  users: null,
};

export const userSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
        state.error = undefined;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authActions } = userSlice;
export const { reducer: userReducer } = userSlice;
