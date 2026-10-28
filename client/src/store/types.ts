export interface User {
    id: string;
    name: string;
    email: string;
    role: "admin" | "supplier" | "retailer";
}

export interface AuthState{
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
}