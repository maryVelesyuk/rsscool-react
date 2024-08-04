import { describe, it, expect } from "vitest";
import { PlanetCard } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import StoreProvider from "../../../app/StoreProvider";
import ThemeProvider from "../../../app/theme-provider";

const planetX = {
  name: "planet X",
  rotation_period: "string",
  orbital_period: "string",
  diameter: "string",
  climate: "string",
  gravity: "string",
  terrain: "string",
  surface_water: "string",
  population: "string",
  residents: ["string"],
  films: ["string"],
  created: "string",
  edited: "string",
  url: "string",
};

describe("testing PlanetCard", () => {
  it("should render PlanetCard", () => {
    render(
      <StoreProvider>
        <ThemeProvider>
          <PlanetCard planetInfo={planetX} />
        </ThemeProvider>
      </StoreProvider>
    );
    expect(screen.getByText(/planet X/)).toBeInTheDocument();
  });
  it("should select item when click on checkbox", () => {
    render(
      <StoreProvider>
        <ThemeProvider>
          <PlanetCard planetInfo={planetX} />
        </ThemeProvider>
      </StoreProvider>
    );
    const checkbox = screen.getByLabelText("Select") as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
