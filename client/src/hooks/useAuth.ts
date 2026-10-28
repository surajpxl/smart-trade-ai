
import { useAppSelector } from "../store/hooks";

export function useAuth() {
  const { user, token, isAuthenticated, isInitialized } =
    useAppSelector((state) => state.auth);

  return {
    user,
    token,
    isAuthenticated,
    isInitialized,
    role: user?.role ?? null,
  };
}
