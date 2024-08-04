import { describe, it, expect, vi } from "vitest";
import { Input } from ".";
import { render, screen } from "@testing-library/react";
import ThemeProvider from "../../../app/theme-provider";

const onChangeMock = vi.fn();
describe("testing Input", () => {
  it("should render placeholder", () => {
    render(
      <ThemeProvider>
        <Input value="" onChange={onChangeMock} placeholder="placeholder" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("placeholder")).toBeInTheDocument();
  });
  it("should render Input in dark mode", () => {
    render(
      <ThemeProvider>
        <Input value="" onChange={onChangeMock} placeholder="placeholder" />
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText("placeholder")).toHaveStyle({
      backgroundColor: "#434343;",
    });
  });
});
