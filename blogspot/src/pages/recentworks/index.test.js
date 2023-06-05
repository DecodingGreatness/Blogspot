import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
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

test("clicking on the carousel updates the displayed card", () => {
  const cards = ["card1", "card2", "card3", "card4", "card5"];

  render(<RecentWorks cards={cards} />);

  const intialCard = screen.getByAltText("card1");
  expect(intialCard).toBeInTheDocument();

  const carousel = screen.getByAltText("recent works");
  fireEvent.click(carousel);

  const nextCard = screen.getAllByAltText("card2");
  expect(nextCard).toBeInTheDocument();
});
