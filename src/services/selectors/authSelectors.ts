import { StateSchema } from '../store';

export const selectIsAuth = (state: StateSchema) => state.auth.isAuth;
