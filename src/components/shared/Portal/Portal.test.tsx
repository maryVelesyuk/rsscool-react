import { describe, it, expect, vi } from "vitest";
import { Portal } from ".";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("testing Portal", () => {
  it("should render Modal when showModal is true", () => {
    vi.mock("react", async () => ({
      ...(await vi.importActual("react")),
      useState: () => [true, vi.fn()],
    }));

    render(
      <Provider store={store}>
        <Portal />
      </Provider>
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
