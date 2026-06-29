"use client";

import { useLayoutEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  CandlestickSeries,
  HistogramSeries,
  CrosshairMode,
  UTCTimestamp,
} from "lightweight-charts";

import TimeframeTabs from "./TimeframeTabs";
import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

import { useGetTokenOHLCV } from "@/hooks/useGetTokenOHLCV";
import { ChartInterval } from "@/types/chart";

interface TradingViewChartProps {
  chain: string;
  address: string;
  interval: ChartInterval;
  onIntervalChange: (value: ChartInterval) => void;
}

const CHART_HEIGHT = 420;

export default function TradingViewChart({
  chain,
  address,
  interval,
  onIntervalChange,
}: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError } = useGetTokenOHLCV({
    chain,
    address,
    interval,
  });

  useLayoutEffect(() => {
    if (!containerRef.current || !data?.items?.length) return;

    const chart = createChart(containerRef.current, {
      width: containerRef.current.clientWidth,
      height: CHART_HEIGHT,

      layout: {
        background: {
          type: ColorType.Solid,
          color: "#070B12",
        },
        textColor: "#94A3B8",
      },

      grid: {
        vertLines: {
          color: "#18202B",
        },
        horzLines: {
          color: "#18202B",
        },
      },

      crosshair: {
        mode: CrosshairMode.Normal,
      },

      rightPriceScale: {
        borderColor: "#1E293B",
        scaleMargins: {
          top: 0.05,
          bottom: 0.25,
        },
      },

      timeScale: {
        borderColor: "#1E293B",
        timeVisible: true,
        secondsVisible: false,
        rightOffset: 8,
        barSpacing: 8,
      },
    });

    const candleSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#4ADE80",
      downColor: "#F87171",
      wickUpColor: "#4ADE80",
      wickDownColor: "#F87171",
      borderUpColor: "#4ADE80",
      borderDownColor: "#F87171",

      priceFormat: {
        type: "price",
        precision: 8,
        minMove: 0.00000001,
      },
    });

    const volumeSeries = chart.addSeries(HistogramSeries, {
      priceScaleId: "volume",

      priceFormat: {
        type: "volume",
      },

      lastValueVisible: false,
      priceLineVisible: false,
    });

    chart.priceScale("volume").applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    candleSeries.setData(
      data.items.map((candle) => ({
        time: candle.unix_time as UTCTimestamp,
        open: candle.o,
        high: candle.h,
        low: candle.l,
        close: candle.c,
      })),
    );

    volumeSeries.setData(
      data.items.map((candle) => ({
        time: candle.unix_time as UTCTimestamp,
        value: candle.v_usd,
        color:
          candle.c >= candle.o
            ? "rgba(74,222,128,0.35)"
            : "rgba(248,113,113,0.35)",
      })),
    );

    chart.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current) return;

      chart.applyOptions({
        width: containerRef.current.clientWidth,
      });

      chart.timeScale().fitContent();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      chart.remove();
    };
  }, [chain, address, data]);

  // Only show loading on initial load (no data)
  if (isLoading && !data) {
    return (
      <div style={{ height: CHART_HEIGHT }} className="w-full">
        <LoadingState label="Loading chart..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ height: CHART_HEIGHT }} className="w-full">
        <ErrorState label="Failed to load chart." />
      </div>
    );
  }

  return (
    <>
      <div className="h-11">
        <TimeframeTabs interval={interval} onChange={onIntervalChange} />
      </div>

      <div
        ref={containerRef}
        className="w-full"
        style={{ height: CHART_HEIGHT }}
      />
    </>
  );
}
