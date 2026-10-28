
export type UserRole = "admin" | "retailer" | "supplier";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
}




// ---------------Register--------------


export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisteredUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user: RegisteredUser;
}

export interface RegisterFormValues extends RegisterData {
  confirmPassword: string;
  agreeTerms: boolean;
}
