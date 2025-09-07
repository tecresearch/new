import React from "react";
import "./App.css";
import "h8k-components";
import Profile from "./components/Profile";

const title = "React Edit Profile";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row justify-content-center mt-50">
        <Profile />
      </div>
    </div>
  );
};

export default App;
