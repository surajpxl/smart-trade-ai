
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import type { UserRole } from "../../types/auth.types";
import { getDashboardRoute } from "../../utils/roleRedirect";

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
}

export default function ProtectedRoute({
  allowedRoles,
}: ProtectedRouteProps) {
  const { user, token, isAuthenticated, isInitialized } = useAuth();

  if (!isInitialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading session...
      </div>
    );
  }

  if (!isAuthenticated || !token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return (
      <Navigate
        to={getDashboardRoute(user.role)}
        replace
      />
    );
  }

  return <Outlet />;
}
