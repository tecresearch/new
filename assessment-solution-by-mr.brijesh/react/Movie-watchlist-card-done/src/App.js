import React from "react";
import "./App.css";
import "h8k-components";
import WatchlistApp from "./components/WatchlistApp";

const title = "Movie Watchlist";

const App = () => {
  return (
    <div className="App pa-20">
      <h8k-navbar header={title}></h8k-navbar>
      <div>
        <WatchlistApp />
      </div>
    </div>
  );
};

export default App;
