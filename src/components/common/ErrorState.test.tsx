import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ErrorState from "./ErrorState";

describe("ErrorState", () => {
  it("renders error label", () => {
    render(<ErrorState label="Failed to load token." />);

    expect(screen.getByText("Failed to load token.")).toBeInTheDocument();
  });

  it("applies custom height", () => {
    const { container } = render(<ErrorState label="Oops" height={180} />);

    expect(container.firstChild).toHaveStyle({
      height: "180px",
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <ErrorState label="Oops" className="justify-start" />,
    );

    expect(container.firstChild).toHaveClass("justify-start");
  });
});
