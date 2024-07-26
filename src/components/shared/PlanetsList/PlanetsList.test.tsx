import { it, expect } from "vitest";
import { PlanetsList } from ".";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

it("should render PlanetsList", async () => {
  render(
    <Provider store={store}>
      <PlanetsList />
    </Provider>
  );
  expect(screen.getByTestId("planetsList")).toBeInTheDocument();
});
