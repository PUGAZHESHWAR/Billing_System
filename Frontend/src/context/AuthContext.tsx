import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../types/auth';
import { 
  decodeJWTToken, 
  isTokenExpired, 
  getTokenFromStorage, 
  setTokenToStorage, 
  removeTokenFromStorage 
} from '../utils/jwt';

interface AuthContextType {
  user: User | null;
  login: (token: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = (token: string): boolean => {
    try {
      if (isTokenExpired(token)) {
        return false;
      }

      const decodedToken = decodeJWTToken(token);
      if (!decodedToken || !decodedToken.role || !decodedToken.sub) {
        return false;
      }
      const userData: User = {
        username: decodedToken.username,
        role: decodedToken.role,
        token
      };

      setUser(userData);
      setTokenToStorage(token);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    removeTokenFromStorage();
  };

  // Check for existing valid token on app load
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = getTokenFromStorage();
      
      if (token && !isTokenExpired(token)) {
        login(token);
      }
      
      setIsLoading(false);
    };

    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};