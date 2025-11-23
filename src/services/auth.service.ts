import api from './api';
import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@/types';

/**
 * Auth Service
 * Handles authentication API calls (login and register)
 */
export const authService = {
  /**
   * Login user
   * @param credentials - Email and password
   * @returns Usuario object if successful
   */
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  /**
   * Register new user
   * @param userData - Nome, email and password
   * @returns API response with created Usuario object and message
   */
  register: async (userData: RegisterRequest): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>('/auth/register', userData);
    return response.data;
  },
};
