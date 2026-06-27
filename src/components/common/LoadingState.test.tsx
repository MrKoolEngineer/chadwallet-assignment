import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LoadingState from "./LoadingState";

describe("LoadingState", () => {
  it("renders the provided loading label", () => {
    render(<LoadingState label="Loading chart..." />);

    expect(screen.getByText("Loading chart...")).toBeInTheDocument();
  });

  it("applies custom height", () => {
    const { container } = render(
      <LoadingState label="Loading..." height={250} />,
    );

    expect(container.firstChild).toHaveStyle({
      height: "250px",
    });
  });

  it("uses full height by default", () => {
    const { container } = render(<LoadingState label="Loading..." />);

    expect(container.firstChild).toHaveStyle({
      height: "100%",
    });
  });
});
