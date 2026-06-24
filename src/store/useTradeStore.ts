import { create } from "zustand";

interface SelectedToken {
  symbol: string;
  chain: string;
}

interface TradeState {
  selectedChain: string;
  selectedToken: string;
  selectedTokenData: SelectedToken | null;
  setSelectedChain: (chain: string) => void;
  setSelectedToken: (token: string) => void;
  setSelectedTokenData: (tokenData: SelectedToken) => void;
}

export const useTradeStore = create<TradeState>((set) => ({
  selectedChain: "solana",
  selectedToken: "SOL",
  selectedTokenData: { symbol: "SOL", chain: "solana" },

  setSelectedChain: (chain) => set({ selectedChain: chain }),
  setSelectedToken: (token) => set({ selectedToken: token }),
  setSelectedTokenData: (tokenData) =>
    set({
      selectedTokenData: tokenData,
      selectedToken: tokenData.symbol,
      selectedChain: tokenData.chain,
    }),
}));
