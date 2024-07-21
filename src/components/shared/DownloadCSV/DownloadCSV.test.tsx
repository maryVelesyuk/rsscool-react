import { describe, it, expect } from "vitest";
import { DownloadCSV } from "./";
import { render } from "@testing-library/react";

describe("testing DownloadCSV", () => {
  it("should render text 'Download'", () => {
    const { getByText } = render(<DownloadCSV data={[]} fileName="file" />);
    expect(getByText("Download")).toBeInTheDocument();
  });
});
