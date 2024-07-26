import { describe, it, expect, vi } from "vitest";
import { ErrorPage } from ".";
import { render } from "@testing-library/react";

let errorCode = 404;

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useRouteError: () => {
    return { status: errorCode };
  },
  isRouteErrorResponse: () => {
    return true;
  },
}));

describe("testing Button", () => {
  it("should return 404 page", () => {
    const { getByText } = render(<ErrorPage />);
    expect(getByText("Error 404")).toBeInTheDocument();
  });
  it("should return unexpected error page", () => {
    errorCode = 400;
    const { getByText } = render(<ErrorPage />);
    expect(
      getByText("Sorry, an unexpected error has occurred.")
    ).toBeInTheDocument();
  });
});
