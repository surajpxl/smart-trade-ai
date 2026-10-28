
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types/auth.types";

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isInitialized: false,
};

interface LoginPayload {
  user: User;
  token: string;
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isInitialized = true;
    },

    restoreAuth: (
      state,
      action: PayloadAction<LoginPayload | null>,
    ) => {
      state.user = action.payload?.user ?? null;
      state.token = action.payload?.token ?? null;
      state.isAuthenticated = Boolean(
        action.payload?.token && action.payload?.user,
      );
      state.isInitialized = true;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isInitialized = true;
    },
  },
});

export const { login, restoreAuth, logout } = authSlice.actions;
export default authSlice.reducer;
