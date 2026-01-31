import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../types/auth';

export const decodeJWTToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = decodeJWTToken(token);
    if (!decoded) return true;
    
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch {
    return true;
  }
};

export const getTokenFromStorage = (): string | null => {
  return localStorage.getItem('auth_token');
};

export const setTokenToStorage = (token: string): void => {
  localStorage.setItem('auth_token', token);
};

export const removeTokenFromStorage = (): void => {
  localStorage.removeItem('auth_token');
};