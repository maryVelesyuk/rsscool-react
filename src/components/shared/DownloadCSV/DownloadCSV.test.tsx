import { describe, it, expect } from "vitest";
import { DownloadCSV } from "./";
import { fireEvent, render } from "@testing-library/react";

describe("testing DownloadCSV", () => {
  it("should render text 'Download'", () => {
    const { getByText } = render(<DownloadCSV data={[]} fileName="file" />);
    expect(getByText("Download")).toBeInTheDocument();
  });
  it("should render text 'Download'", () => {
    const { getByText } = render(<DownloadCSV data={[]} fileName="file" />);
    const btn = getByText("Download");
    expect(btn).toBeInTheDocument();
  });
});
