import { describe, it, expect, vi } from "vitest";
import { MainPage } from ".";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../../../app/StoreProvider";
import ThemeProvider from "../../../app/theme-provider";

vi.mock("next/navigation", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useRouter: () => ({
    replace: vi.fn(),
  }),
  useSearchParams: () => ({
    searchParams: "searchParams",
  }),
  usePathname: () => ({
    pathname: "pathname",
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
