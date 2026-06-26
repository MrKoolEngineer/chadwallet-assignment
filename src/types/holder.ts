export interface TokenHolder {
  owner: string;
  amount: string;
  decimals: number;
  mint: string;
  token_account: string;
  ui_amount: number;
  is_scaled_ui_token: boolean;
  multiplier: number | null;
}

export interface TokenHolderResponse {
  items: TokenHolder[];
}
