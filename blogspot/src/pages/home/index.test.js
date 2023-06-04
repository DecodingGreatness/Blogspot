import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "./index.js";

test("check homepage", () => {
  render(<Home />);

  // Assert that the initial page (Home) is rendered
  expect(screen.getByText(/react developer/i)).toBeInTheDocument();
});

test("profile image", () => {
  render(<Home />);
  const profileImage = screen.getByAltText("profile");
  expect(profileImage).toBeInTheDocument();
  expect(profileImage.width).toBe(490);
  expect(profileImage.height).toBe(625);
});
