import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.js";

test("navbar navigation", () => {
  render(<App />);

  // Assert that the initial page (Home) is rendered
  expect(screen.getByText(/home/i)).toBeInTheDocument();

  // // Simulate a click on the "Recent Works" link
  fireEvent.click(screen.getByText(/recent works/i));

  // // Assert that the RecentWorks page is rendered
  expect(screen.getByText(/recent works/i)).toBeInTheDocument();

  // Simulate a click on the "Contact" link
  fireEvent.click(screen.getByText(/contact/i));

  // Assert that the Contact page is rendered
  expect(screen.getByText(/contact number/i)).toBeInTheDocument();
});
