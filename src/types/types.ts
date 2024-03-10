export interface UserData {
  email: string;
  password: string | number;
}

export interface User {
  email: string;
  id: string;
  isActivated: boolean;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
