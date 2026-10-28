import { User } from "../types/auth.types";


const TOKEN_KEY = "token";
const USER_KEY = "user";

export const authStorage = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getUser(): User | null {
    const value = localStorage.getItem(USER_KEY);

    if (!value) return null;

    try {
      return JSON.parse(value) as User;
    } catch {
      return null;
    }
  },

  save(token: string, user: User): void {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
