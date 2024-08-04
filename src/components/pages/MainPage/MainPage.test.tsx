import { describe, it, expect, vi } from "vitest";
import { MainPage } from ".";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../../../app/StoreProvider";
import ThemeProvider from "../../../app/theme-provider";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigation: () => ({
    navigate: vi.fn(),
  }),
}));

describe("testing Button", () => {
  it("should render text from props", () => {
    render(
      <ThemeProvider>
        <StoreProvider>
          <MainPage />
        </StoreProvider>
      </ThemeProvider>
    );
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
