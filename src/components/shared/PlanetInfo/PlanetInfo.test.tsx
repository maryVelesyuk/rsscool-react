import { it, expect, describe, vi } from "vitest";
import { PlanetInfo } from ".";
import { render, screen } from "@testing-library/react";
import ThemeProvider from "../../../app/theme-provider";
import StoreProvider from "../../../app/StoreProvider";
import { Planet } from "../PlanetCard/PlanetCard.model";

const mockData = [
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
] as Planet[];

vi.mock("next/navigation", async () => ({
  ...(await vi.importActual("next/navigation")),
  useRouter: () => ({
    router: {},
  }),
}));
describe("testing PlanetInfo", () => {
  it("should render PlanetInfo", async () => {
    render(
      <ThemeProvider>
        <StoreProvider>
          <PlanetInfo planetData={mockData} />
        </StoreProvider>
      </ThemeProvider>
    );
    expect(screen.getByTestId("planetInfo")).toBeInTheDocument();
  });
});
