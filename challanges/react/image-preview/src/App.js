import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import ImagePreview from "./components/ImagePreview";
import { data } from "./data";

const title = "React Image Preview";

const App = () => {

    const [images,setImage]=useState(data);
  return (
    <div className="App">
      <h8k-navbar header={title} />
      <ImagePreview images={images}
                    setImage={setImage}
       />
    </div>
  );
};

export default App;
