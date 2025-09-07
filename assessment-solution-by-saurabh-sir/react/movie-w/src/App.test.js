import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import WatchlistApp from "./components/WatchlistApp";

describe("Watchlist App", () => {
  test("1. Initial watchlist is empty", () => {
    render(<WatchlistApp />);
    const emptyWatchlistMessage = screen.getByTestId("watchlist-empty");
    expect(emptyWatchlistMessage).toBeInTheDocument();
  });

  test("2. Add button adds movie to watchlist", () => {
    render(<WatchlistApp />);
    const addButton = screen.getByTestId("add-btn-1");

    fireEvent.click(addButton);

    expect(screen.queryByTestId("watchlist-empty")).not.toBeInTheDocument();

    const watchlistMovie = screen.getAllByTestId("movie-card-1");
    expect(watchlistMovie).toHaveLength(2);
  });

  test("3. Add button is disabled for movies already in watchlist", () => {
    render(<WatchlistApp />);
    const firstMovieAddBtn = screen.getByTestId("add-btn-1");

    fireEvent.click(firstMovieAddBtn);

    expect(firstMovieAddBtn).toBeDisabled();
  });

  test("4. Remove button removes movie from watchlist", () => {
    render(<WatchlistApp />);
    const firstMovieAddBtn = screen.getByTestId("add-btn-1");

    fireEvent.click(firstMovieAddBtn);

    const removeButton = screen.getByTestId("remove-btn-1");
    fireEvent.click(removeButton);

    const emptyWatchlistMessage = screen.getByTestId("watchlist-empty");
    expect(emptyWatchlistMessage).toBeInTheDocument();

    const firstMovieAddButtonAgain = screen.getByTestId("add-btn-1");
    expect(firstMovieAddButtonAgain).not.toBeDisabled();
  });

  test("5. Clear Watchlist button removes all movies", () => {
    render(<WatchlistApp />);
    const addButtons = [
      screen.getByTestId("add-btn-1"),
      screen.getByTestId("add-btn-2"),
      screen.getByTestId("add-btn-3"),
    ];

    addButtons.forEach((button) => fireEvent.click(button));

    const clearButton = screen.getByTestId("clear-watchlist-btn");
    fireEvent.click(clearButton);

    const emptyWatchlistMessage = screen.getByTestId("watchlist-empty");
    expect(emptyWatchlistMessage).toBeInTheDocument();
  });

  test("6. Duplicate movies cannot be added to the watchlist", () => {
    render(<WatchlistApp />);

    const addButton = screen.getByTestId("add-btn-1");
    fireEvent.click(addButton); // Add movie to watchlist
    fireEvent.click(addButton); // Attempt to add again

    const watchlistItems = screen.getAllByTestId(/^remove-btn-1/);
    expect(watchlistItems.length).toBe(1); // Verify only one instance exists
  });

  test("7. Watchlist count updates correctly when movies are added and removed", () => {
    render(<WatchlistApp />);

    const addButton1 = screen.getByTestId("add-btn-1");
    const addButton2 = screen.getByTestId("add-btn-2");

    fireEvent.click(addButton1); // Add first movie
    fireEvent.click(addButton2); // Add second movie

    expect(screen.getByTestId("movie-container").childNodes).toHaveLength(2);

    const removeButton1 = screen.getByTestId("remove-btn-1");
    fireEvent.click(removeButton1); // Remove first movie

    expect(screen.getByTestId("movie-container").childNodes).toHaveLength(1);
  });

  test("8. Add to Watchlist and Remove buttons work correctly", () => {
    render(<WatchlistApp />);

    const addButton = screen.getByTestId("add-btn-1");
    fireEvent.click(addButton); // Add movie to watchlist

    expect(addButton).toBeDisabled();

    const removeButton = screen.getByTestId("remove-btn-1");
    fireEvent.click(removeButton); // Remove from watchlist

    expect(addButton).not.toBeDisabled(); // Verify Add button re-enabled
  });
});
