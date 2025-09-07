import React from "react";

const MovieCard = ({ movie, onAdd, onRemove, isInWatchlist }) => {
  return (
    <div className="movie-card" data-testid={`movie-card-${movie.id}`}>
      <h3 data-testid={`movie-title-${movie.id}`}>{movie.title}</h3>
      {onRemove && (
        <button
          className="danger"
          data-testid={`remove-btn-${movie.id}`}
          onClick={() => onRemove(movie)}
        >
          Remove
        </button>
      )}
      {onAdd && (
        <button
          data-testid={`add-btn-${movie.id}`}
          disabled={isInWatchlist}
          onClick={() => onAdd(movie)}
        >
          {isInWatchlist ? "Added" : "Add to Watchlist"}
        </button>
      )}
    </div>
  );
};

export default MovieCard;
