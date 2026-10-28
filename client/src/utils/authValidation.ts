
import type { RegisterFormValues } from "../types/auth.types";

export function validateRegistration(
  values: RegisterFormValues,
): string | null {
  if (!values.name.trim()) {
    return "Please enter your name.";
  }

  if (!values.email.trim()) {
    return "Please enter your email.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return "Please enter a valid email address.";
  }

  if (!values.password) {
    return "Please enter a password.";
  }

  if (values.password !== values.confirmPassword) {
    return "Passwords do not match.";
  }

  if (!values.agreeTerms) {
    return "Please accept the terms and conditions.";
  }

  return null;
}
