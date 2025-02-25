import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(shop)/page";

// Mock the Slideshow component
jest.mock("../../../components/ui/slideshow/Slideshow", () => ({
  Slideshow: () => <div data-testid="slideshow" />,
}));

it("renders example page", () => {
  render(<Home />);
  expect(screen.getByText("BIENVENIDO A RAINBOW CLOTHES")).toBeInTheDocument();
  expect(screen.getByText("test")).toBeInTheDocument();
});
