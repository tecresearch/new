import React from "react";
import "./App.css";
import "h8k-components";
import ImagePreview from "./components/ImagePreview";
import { data } from "./data";

const title = "React Image Preview";

const App = () => {
  return (
    <div className="App">
      <h8k-navbar header={title} />
      <ImagePreview images={data} />
    </div>
  );
};

export default App;
