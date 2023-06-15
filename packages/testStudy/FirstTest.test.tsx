import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { First } from "./First";

test("Example 1 renders successfully", () => {
  render(<First />);
  const element = screen.getByText(/first test/i);
  expect(element).toBeInTheDocument();
});
