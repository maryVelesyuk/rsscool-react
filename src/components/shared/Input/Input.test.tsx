import { describe, it, expect, vi } from "vitest";
import { Input } from ".";
import { render, screen } from "@testing-library/react";
import ThemeContextProvider, { ThemeContext } from "../../../themeContext";

const onChangeMock = vi.fn();
const setTheme = vi.fn();
describe("testing Input", () => {
  it("should render placeholder", () => {
    render(
      <ThemeContextProvider>
        <Input value="" onChange={onChangeMock} placeholder="placeholder" />
      </ThemeContextProvider>
    );
    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
  });
  it("should render Input in dark mode", () => {
    render(
      <ThemeContext.Provider value={{ theme: "dark", setTheme }}>
        <Input value="" onChange={onChangeMock} placeholder="placeholder" />
      </ThemeContext.Provider>
    );
    expect(screen.getByPlaceholderText("placeholder")).toHaveStyle({
      backgroundColor: "#434343;",
    });
  });
});
