import { describe, it, expect } from "vitest";
import { Pagination } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

describe("testing Pagination", () => {
  it("should render Pagination component with 3 pages", () => {
    render(
      <Provider store={store}>
        <Pagination planetsCount={30} />
      </Provider>
    );
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
  it("when clicking on page than the page should be selected", () => {
    render(
      <Provider store={store}>
        <Pagination planetsCount={30} />
      </Provider>
    );
    const secondPage = screen.getByText(/2/);
    expect(secondPage).toBeInTheDocument();
    fireEvent.click(secondPage);
    expect(secondPage).toHaveClass(/active/);
  });
});
