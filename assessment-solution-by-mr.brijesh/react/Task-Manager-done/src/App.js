import React from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Tasks />
    </div>
  );
};

export default App;
