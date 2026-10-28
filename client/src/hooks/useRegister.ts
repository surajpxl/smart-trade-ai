
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import type {
  RegisterData,
  RegisterFormValues,
} from "../types/auth.types";
import { validateRegistration } from "../utils/authValidation";
import { registerUser } from "../services/register.service";

export function useRegister() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitRegistration = async (
    values: RegisterFormValues,
  ): Promise<void> => {
    setError(null);

    const validationError = validateRegistration(values);

    if (validationError) {
      setError(validationError);
      return;
    }

    const payload: RegisterData = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
      role: values.role,
    };

    setIsLoading(true);

    try {
      const response = await registerUser(payload);

      if (!response.success || !response.user?.id) {
        setError(response.message || "Registration failed.");
        return;
      }

      navigate("/login", {
        replace: true,
        state: {
          message: response.message || "Account created successfully.",
        },
      });
    } catch (err: unknown) {
      if (axios.isAxiosError<{ message?: string }>(err)) {
        setError(
          err.response?.data?.message ||
            "Unable to register. Please try again.",
        );
      } else {
        setError("Unable to register. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);

  return {
    submitRegistration,
    isLoading,
    error,
    clearError,
  };
}
