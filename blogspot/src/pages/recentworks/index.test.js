import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import RecentWorks from "./index.js";

test("image count test", () => {
  render(<RecentWorks />);

  const cards = screen.getAllByAltText(/card/i);

  // Assert that image card is three
  expect(cards.length).toBe(3);
});

test("conditional rendering based on selected card", () => {
  render(<RecentWorks />);
  const selectedCard = screen.getByTestId("card");
  expect(selectedCard).toBeInTheDocument();
});
