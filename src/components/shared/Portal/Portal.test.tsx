import { describe, it, expect, vi } from "vitest";
import { Portal } from ".";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../../../app/StoreProvider";

describe("testing Portal", () => {
  it("should render Modal when showModal is true", () => {
    vi.mock("react", async () => ({
      ...(await vi.importActual("react")),
      useState: () => [true, vi.fn()],
    }));

    render(
      <StoreProvider>
        <Portal />
      </StoreProvider>
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
