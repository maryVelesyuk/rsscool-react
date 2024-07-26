import { describe, it, expect, vi } from "vitest";
import { MainPage } from ".";
import { render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../themeContext";
import { store } from "../../../redux/store";
import { Provider } from "react-redux";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigation: () => ({
    navigate: vi.fn(),
  }),
}));

describe("testing Button", () => {
  it("should render text from props", () => {
    render(
      <ThemeContextProvider>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </ThemeContextProvider>
    );
    expect(screen.getByText("Search")).toBeInTheDocument();
  });
});
