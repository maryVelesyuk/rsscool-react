import { describe, it, expect } from "vitest";
import { ErrorMessage } from ".";
import { render } from "@testing-library/react";

describe("testing ErrorMessage", () => {
  it("snapshot", () => {
    const result = render(<ErrorMessage />);
    expect(result).toMatchSnapshot();
  });
});
