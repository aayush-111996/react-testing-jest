import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("Hello Component Rendering", () => {
  render(<Hello />);
  const myelement = screen.getByText("HEllo world");
  expect(myelement).toBeInTheDocument();
});
