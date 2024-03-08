import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthResponse, User } from '../../types/types';
import { loginUser, logout } from '../thunks/loginUser';
import { registerUser } from '../thunks/registerUser';

export interface authState {
  isLoading: boolean;
  error?: string;

  user: User | null;
  isAuth: boolean;
}

const initialState: authState = {
  isLoading: false,
  error: undefined,

  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // setAuth: (state, action: PayloadAction<boolean>) => {
    //   state.isAuth = action.payload
    // },
    // setUser: (state, action: PayloadAction<boolean>) => {
    //   state.isAuth = action.payload
    // },
  },
  extraReducers: builder => {
    // register
    builder
      .addCase(registerUser.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuth = true;
        state.error = undefined;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // login
    builder
      .addCase(loginUser.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuth = true;
        state.error = undefined;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(logout.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.isAuth = false;
        state.error = undefined;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
