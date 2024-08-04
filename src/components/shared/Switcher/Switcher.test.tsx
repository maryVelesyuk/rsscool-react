import { describe, it, expect } from "vitest";
import { Switcher } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeProvider from "../../../app/theme-provider";

describe("testing Switcher", () => {
  it("should render checkbox", () => {
    render(
      <ThemeProvider>
        <Switcher />
      </ThemeProvider>
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("when clicking on the checkbox the checkbox sould be checked", () => {
    render(
      <ThemeProvider>
        <Switcher />
      </ThemeProvider>
    );
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
