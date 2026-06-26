import { CHART_INTERVALS } from "@/constants/chart";

export type ChartInterval = (typeof CHART_INTERVALS)[number]["value"];

export interface OHLCVCandle {
  address: string;
  unix_time: number;

  o: number;
  h: number;
  l: number;
  c: number;
  v: number;
  v_usd: number;

  type: string;
  currency: string;
}

export interface OHLCVResponse {
  items: OHLCVCandle[];
}
