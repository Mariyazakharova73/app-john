import { StateSchema } from '../store';

export const selectIsAuth = (state: StateSchema) => state.auth.isAuth;
export const selectUsers = (state: StateSchema) => state.data.users;
