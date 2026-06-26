import { create } from "zustand";

export interface SelectedToken {
  address: string;
  symbol: string;
  name: string;
  chain: string;
}

interface TradeState {
  selectedToken: SelectedToken | null;

  setSelectedToken: (token: SelectedToken) => void;

  clearSelectedToken: () => void;
}

export const useTradeStore = create<TradeState>((set) => ({
  selectedToken: null,

  setSelectedToken: (token) =>
    set({
      selectedToken: token,
    }),

  clearSelectedToken: () =>
    set({
      selectedToken: null,
    }),
}));
