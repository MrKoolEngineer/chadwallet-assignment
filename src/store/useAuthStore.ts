import { create } from "zustand";

interface AuthState {
  isReady: boolean;
  isAuthenticated: boolean;
  walletAddress: string | null;
  setAuthFlags: (flags: {
    isReady: boolean;
    isAuthenticated: boolean;
    walletAddress: string | null;
  }) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isReady: false,
  isAuthenticated: false,
  walletAddress: null,
  setAuthFlags: (flags) => set(flags),
}));
