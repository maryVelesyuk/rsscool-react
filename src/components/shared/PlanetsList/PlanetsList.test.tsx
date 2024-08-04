import { it, expect, beforeAll, afterEach, afterAll, describe } from "vitest";
import { PlanetsList } from ".";
import { render, screen } from "@testing-library/react";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import ThemeProvider from "../../../app/theme-provider";
import StoreProvider from "../../../app/StoreProvider";

export const handlers = [
  http.get("?page=1", async () => {
    await delay(150);
    return HttpResponse.json([
      {
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
      },
    ]);
  }),
];
const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("testing PlanetsList", () => {
  it("should render PlanetsList", async () => {
    render(
      <ThemeProvider>
        <StoreProvider>
          <PlanetsList />
        </StoreProvider>
      </ThemeProvider>
    );
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
