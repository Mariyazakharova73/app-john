import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { $api } from '../api/api';
import { authReducer } from './slices/authSlice';

const extraArg = {
  api: $api,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface StateSchema {
  // products: ProductState;
  // filters: FiltersState;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
