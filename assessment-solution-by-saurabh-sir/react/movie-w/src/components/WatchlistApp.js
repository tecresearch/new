import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Watchlist from "./Watchlist";

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "The Dark Knight" },
  { id: 4, title: "Dunkirk" },
  { id: 5, title: "The Shawshank Redemption" },
];

const WatchlistApp = () => {
  const [watchlist, setWatchlist] = useState([]);

  const handleAdd = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const handleRemove = (movie) => {
    setWatchlist(watchlist.filter((m) => m.id !== movie.id));
  };

  const handleClear = () => {
    setWatchlist([]);
  };

  return (
    <div>
      <h2>Movies</h2>
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAdd={handleAdd}
            isInWatchlist={watchlist.some((m) => m.id === movie.id)}
          />
        ))}
      </div>

      <Watchlist
        watchlist={watchlist}
        onRemove={handleRemove}
        onClear={handleClear}
      />
    </div>
  );
};

export default WatchlistApp;
