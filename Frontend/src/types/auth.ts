export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

export interface DecodedToken {
  role: 'admin' | 'staff';
  username: string;
  exp: number;
  iat: number;
  [key: string]: any;
}

export interface User {
  username: string;
  role: 'admin' | 'staff';
  token: string;
}