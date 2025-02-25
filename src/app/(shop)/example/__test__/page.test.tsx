import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PageExample from "@/app/(shop)/example/page";

it("renders example page", () => {
  render(<PageExample />);
  expect(screen.getByText("example page")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
});
