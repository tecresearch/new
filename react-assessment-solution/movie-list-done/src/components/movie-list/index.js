import React, { use, useEffect, useState } from "react";
import "./index.css";

function MovieList() {

  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchMovies = async (e) => {
    e.preventDefault();

    try {
      const BASE_URL = 'https://jsonmock.hackerrank.com/api/moviesdata?Year='
      const response = await fetch(BASE_URL + `${year}`);
      const data = await response.json();
      setMovies(data.data);
      console.log(movies);
      setLoading(false);
      setYear('')
    } catch (error) {
      console.log("not found: " + error);
      loading(true);
    }
  }


  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          value={year}
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <button className="" data-testid="submit-button"
          onClick={fetchMovies}
        >Search</button>
      </section>

      <ul className="mt-50 styled" data-testid="movieList">

        {movies?.map((movie, index) => (
          <li key={index} className="slide-up-fade-in py-10">{movie.Title}</li>
        ))}

      </ul>

      {movies.length === 0 && !loading && <div className="mt-50 slide-up-fade-in" data-testid="no-result">
       No Results Found
      </div>}
    </div>
  );
}

export default MovieList