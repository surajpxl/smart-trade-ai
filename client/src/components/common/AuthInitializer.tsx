
import { useEffect } from "react";
import type { ReactNode } from "react";

import { useAppDispatch } from "../../store/hooks";
import { restoreAuth } from "../../store/slices/authSlice";
import { authStorage } from "../../utils/storage";

interface AuthInitializerProps {
  children: ReactNode;
}

export default function AuthInitializer({
  children,
}: AuthInitializerProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = authStorage.getToken();
    const user = authStorage.getUser();

    dispatch(
      restoreAuth(
        token && user ? { token, user } : null,
      ),
    );
  }, [dispatch]);

  return children;
}
