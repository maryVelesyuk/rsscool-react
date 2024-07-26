import { describe, it, expect, vi } from "vitest";
import { Modal } from "../";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

const onCloseMock = vi.fn();
describe("testing Modal", () => {
  it("should render Modal", () => {
    render(
      <Provider store={store}>
        <Modal onClose={onCloseMock} />
      </Provider>
    );
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });
});
