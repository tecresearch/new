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

  const [watchListMovies,setWatchListMovies]=useState([]);

  return (
    <div>
      <h2>Movies</h2>
      <div className="movies-container">
        <MovieCard 
        movies={movies}
        watchListMovies={watchListMovies} 
        setWatchListMovies={setWatchListMovies}
        isWatchList={false}
        />
      </div>

      <Watchlist
        watchListMovies={watchListMovies} 
        setWatchListMovies={setWatchListMovies}

        />
    </div>
  );
};

export default WatchlistApp;
