import { describe, it, expect } from "vitest";
import { Pagination } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import StoreProvider from "../../../app/StoreProvider";

describe("testing Pagination", () => {
  it("should render Pagination component with 3 pages", () => {
    render(
      <StoreProvider>
        <Pagination planetsCount={30} />
      </StoreProvider>
    );
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
  it("when clicking on page than the page should be selected", () => {
    render(
      <StoreProvider>
        <Pagination planetsCount={30} />
      </StoreProvider>
    );
    const secondPage = screen.getByText(/2/);
    expect(secondPage).toBeInTheDocument();
    fireEvent.click(secondPage);
    expect(secondPage).toHaveClass(/active/);
  });
});
