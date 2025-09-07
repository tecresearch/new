import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({watchListMovies,setWatchListMovies}) => {


  return (
     <div data-testid="watchlist-container">
      {/* Provide the total count of movies watchlisted */}
      <h2>Watchlist {<span>{watchListMovies.length}</span>}</h2>
      { watchListMovies.length===0 && <p data-testid="watchlist-empty">Your watchlist is empty.</p> }
      <div>
        <div data-testid="movie-container" className="movies-container">
            {
              watchListMovies.map ((movie,id) =>(
                     <MovieCard key={id} movies={[movie]} 
                     watchListMovies={watchListMovies} 
                     setWatchListMovies={setWatchListMovies}  
                     isWatchList={true}/>
              ))
            }
        </div>
        <button data-testid="clear-watchlist-btn" onClick={()=>setWatchListMovies([])}>Clear Watchlist</button>
      </div>
    </div>
  );
};

export default Watchlist;
