import { describe, it, expect, vi } from "vitest";
import { Modal } from "../";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../../../app/StoreProvider";

const onCloseMock = vi.fn();
describe("testing Modal", () => {
  it("should render Modal", () => {
    render(
      <StoreProvider>
        <Modal onClose={onCloseMock} />
      </StoreProvider>
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
