
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/slices/authSlice";
import { authStorage } from "../utils/storage";

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useCallback(() => {
    authStorage.clear();
    dispatch(logout());
    navigate("/login", { replace: true });
  }, [dispatch, navigate]);
}
