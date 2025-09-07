import React from "react";
import "./App.css";

import TeamSelection from "./components/team-selection";
import Header from "./components/Header";

const title = "Team Selection";

const App = () => {
  return (
    <div className="App min-h-screen bg-[#F7F8FD]">
      <Header />
      <TeamSelection />
    </div>
  );
};

export default App;
