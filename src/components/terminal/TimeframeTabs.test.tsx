import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import TimeframeTabs from "./TimeframeTabs";

describe("TimeframeTabs", () => {
  it("renders all timeframe buttons", () => {
    render(<TimeframeTabs interval="15m" onChange={vi.fn()} />);

    expect(screen.getByRole("button", { name: "1m" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "5m" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "15m" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "30m" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1H" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "4H" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1D" })).toBeInTheDocument();
  });

  it("calls onChange when another interval is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<TimeframeTabs interval="15m" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "1H" }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("1h");
  });

  it("highlights the active interval", () => {
    render(<TimeframeTabs interval="15m" onChange={vi.fn()} />);

    expect(screen.getByRole("button", { name: "15m" })).toHaveClass(
      "bg-chad-green",
    );
  });
});
