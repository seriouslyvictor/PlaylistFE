// Usuario entity from the API
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string; // Optional because API doesn't return senha in responses
}

// Login request payload
export interface LoginRequest {
  email: string;
  senha: string;
}

// Login response (returns Usuario object)
export type LoginResponse = Usuario;

// Register request payload
export interface RegisterRequest {
  nome: string;
  email: string;
  senha: string;
}

// Register response structure from API
export interface RegisterResponse {
  usuario: Usuario;
  message: string;
}
