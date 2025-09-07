import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({ watchlist, onRemove, onClear }) => {
  return (
    <div data-testid="watchlist-container">
      <h2>
        Watchlist {watchlist.length > 0 && <span>({watchlist.length})</span>}
      </h2>

      {watchlist.length === 0 ? (
        <p data-testid="watchlist-empty">Your watchlist is empty.</p>
      ) : (
        <div>
          <div data-testid="movie-container" className="movies-container">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onRemove={onRemove} />
            ))}
          </div>
          <button data-testid="clear-watchlist-btn" onClick={onClear}>
            Clear Watchlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
