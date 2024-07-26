import { describe, it, expect } from "vitest";
import { PlanetCard } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeContextProvider from "../../../themeContext";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { MemoryRouter } from "react-router-dom";

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
      <MemoryRouter>
        <Provider store={store}>
          <ThemeContextProvider>
            <PlanetCard planetInfo={planetX} />
          </ThemeContextProvider>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(/planet X/)).toBeInTheDocument();
  });
  it("should select item when click on checkbox", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ThemeContextProvider>
            <PlanetCard planetInfo={planetX} />
          </ThemeContextProvider>
        </Provider>
      </MemoryRouter>
    );
    const checkbox = screen.getByLabelText("Select") as HTMLInputElement;
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toEqual(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
  });
});
