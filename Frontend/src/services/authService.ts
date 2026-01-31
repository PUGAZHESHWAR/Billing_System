import { LoginCredentials, LoginResponse } from '../types/auth';

const API_BASE_URL = 'http://localhost:8000/api';

export class AuthService {
  /**
   * Login user with credentials (sent as x-www-form-urlencoded)
   */
  static async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      // Convert credentials object to URL-encoded string
      const formBody = new URLSearchParams();
      for (const key in credentials) {
        if (credentials.hasOwnProperty(key)) {
          formBody.append(key, credentials[key as keyof LoginCredentials]);
        }
      }

      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log('Login error response data:', response);
        throw new Error(errorData.message || `Login failed: ${response.statusText}`);

      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred during login');
    }
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    // Add logout API call if needed (e.g., token invalidation)
    // Currently just resolves for client-side logout
    return Promise.resolve();
  }
}
