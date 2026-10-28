
import type { UserRole } from "../types/auth.types";

export const ROLE_DASHBOARDS: Record<UserRole, string> = {
  admin: "/admin/dashboard",
  retailer: "/retailer/dashboard",
  supplier: "/supplier/dashboard",
};

export function getDashboardRoute(role: string): string {
  if (role in ROLE_DASHBOARDS) {
    return ROLE_DASHBOARDS[role as UserRole];
  }

  return "/login";
}
