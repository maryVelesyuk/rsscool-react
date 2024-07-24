import { describe, it, expect } from "vitest";
import { Switcher } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../themeContext";

describe("testing Switcher", () => {
  it("should render checkbox", () => {
    render(
      <ThemeContextProvider>
        <Switcher />
      </ThemeContextProvider>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("when clicking on the checkbox the checkbox sould be checked", () => {
    render(
      <ThemeContextProvider>
        <Switcher />
      </ThemeContextProvider>
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
