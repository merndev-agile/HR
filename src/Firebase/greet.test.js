import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Greet from "./greet";

test("greet", () => {
  render(<Greet />);
  const greetElement = screen.getByText(/Greet/i);
  expect(greetElement).toBeInTheDocument();
});
