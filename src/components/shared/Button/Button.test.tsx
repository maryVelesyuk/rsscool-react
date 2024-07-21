import { describe, it, expect, vi } from "vitest";
import { Button } from ".";
import { render } from "@testing-library/react";

const onClickMock = vi.fn();
describe("testing Button", () => {
  it("should render text from props", () => {
    const { getByText } = render(
      <Button type="primary" text="search" onClick={onClickMock} />
    );
    expect(getByText("search")).toBeInTheDocument();
  });
});
