import React, { useState } from "react";
import Radio from "./components/Radio";
import Table from "./components/Table";
import "h8k-components";

const title = "Birthday Records";

function App() {
  const [parameter, setParameter] = useState("");

  const handleSort = (option) => {
    setParameter(option);
  };

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Radio sortBy={handleSort} selected={parameter} />
      <Table parameter={parameter} />
    </div>
  );
}

export default App;
