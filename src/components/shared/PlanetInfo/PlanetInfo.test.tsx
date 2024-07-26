import { it, expect, describe } from "vitest";
import { PlanetInfo } from ".";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import ThemeContextProvider from "../../../themeContext";
import { createMemoryRouter } from "react-router-dom";
import { RouterProvider } from "react-router";

const mockData = {
  results: [
    {
      name: "mars",
      diameter: "12",
      gravity: "gravity",
      orbital_period: "12",
      population: "123",
      rotation_period: "12",
      surface_water: "water",
      terrain: "terrain",
    },
  ],
};
const router = createMemoryRouter(
  [
    {
      path: "/",
      element: (
        <ThemeContextProvider>
          <Provider store={store}>
            <PlanetInfo />
          </Provider>
        </ThemeContextProvider>
      ),
      loader: () => mockData,
    },
  ],
  { initialEntries: ["/"] }
);
describe("testing PlanetInfo", () => {
  it("should render PlanetInfo", async () => {
    render(<RouterProvider router={router} />);
    expect(screen.getByTestId("planetInfo")).toBeInTheDocument();
  });
});
