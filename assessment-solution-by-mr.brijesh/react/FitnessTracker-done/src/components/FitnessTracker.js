import React, { useState } from "react";
import LogForm from "./LogForm";
import LogList from "./LogList";

const FitnessTracker = () => {
  const [data,setData]=useState([]);
  return (
    <div className="pa-20">
      <h1>Track Your Fitness</h1>
      <LogForm data={data} setData={setData}/>
      <LogList data={data}/>
    </div>
  );
};

export default FitnessTracker;
