
import api from "../network/axios";
import { LoginCredentials, LoginResponse } from "../types/auth.types";


export async function loginUser(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "auth/login",
    credentials
  );

  return response.data;
}
