
import api from "../network/axios";
import type {
  RegisterData,
  RegisterResponse,
} from "../types/auth.types";

export const registerUser = async (
  payload: RegisterData,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/auth/register",
    payload,
  );

  return response.data;
};
