import React from "react";
import { describe, it, expect } from "vitest";
import { Spinner } from "./Spinner";
import { render } from "@testing-library/react";

describe("testing Spinner", () => {
  it("snapshot", () => {
    const result = render(<Spinner />);
    expect(result).toMatchSnapshot();
  });
});
