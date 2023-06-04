import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./index.js";

test("check homepage", () => {
  render(<Home />);

  // Assert that the initial page (Home) is rendered
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});
