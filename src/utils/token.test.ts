import { describe, expect, it } from "vitest";

import {
  formatCompactNumber,
  formatPercentage,
  formatPrice,
  formatUsdCompact,
} from "./token";

describe("formatPrice", () => {
  it("formats prices greater than or equal to one", () => {
    expect(formatPrice(1234.56)).toBe("$1,234.56");
  });

  it("formats prices between 0.01 and 1", () => {
    expect(formatPrice(0.123456)).toBe("$0.123456");
  });

  it("formats very small prices", () => {
    expect(formatPrice(0.000012345)).toBe("$0.00001234");
  });

  it("returns placeholder for null", () => {
    expect(formatPrice(null)).toBe("--");
  });

  it("returns placeholder for undefined", () => {
    expect(formatPrice(undefined)).toBe("--");
  });

  it("returns placeholder for NaN", () => {
    expect(formatPrice(Number.NaN)).toBe("--");
  });
});

describe("formatPercentage", () => {
  it("formats positive percentage", () => {
    expect(formatPercentage(12.345)).toBe("+12.35%");
  });

  it("formats negative percentage", () => {
    expect(formatPercentage(-4.321)).toBe("-4.32%");
  });

  it("returns NEW for null", () => {
    expect(formatPercentage(null)).toBe("NEW");
  });

  it("returns NEW for undefined", () => {
    expect(formatPercentage(undefined)).toBe("NEW");
  });
});

describe("formatCompactNumber", () => {
  it("formats thousands", () => {
    expect(formatCompactNumber(15230)).toBe("15.23K");
  });

  it("formats millions", () => {
    expect(formatCompactNumber(1250000)).toBe("1.25M");
  });

  it("returns placeholder for null", () => {
    expect(formatCompactNumber(null)).toBe("--");
  });
});

describe("formatUsdCompact", () => {
  it("formats compact USD", () => {
    expect(formatUsdCompact(1250000)).toBe("$1.25M");
  });

  it("returns placeholder for undefined", () => {
    expect(formatUsdCompact(undefined)).toBe("--");
  });
});
