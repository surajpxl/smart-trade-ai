
import { useState } from "react";
import axios from "axios";

import { loginUser } from "../services/auth.service";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";
import type { LoginCredentials } from "../types/auth.types";
import { authStorage } from "../utils/storage";

export function useLogin() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutateAsync = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginUser(credentials);

      if (
        !response.success ||
        !response.token ||
        !response.user?.id ||
        !["admin", "retailer", "supplier"].includes(
          response.user.role,
        )
      ) {
        throw new Error("Invalid login response.");
      }

      authStorage.save(response.token, response.user);

      dispatch(
        login({
          token: response.token,
          user: response.user,
        }),
      );

      return response;
    } catch (err: unknown) {
      const message = axios.isAxiosError<{ message?: string }>(err)
        ? err.response?.data?.message
        : err instanceof Error
          ? err.message
          : undefined;

      const finalMessage = message || "Login failed. Please try again.";

      setError(finalMessage);
      throw new Error(finalMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutateAsync,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
