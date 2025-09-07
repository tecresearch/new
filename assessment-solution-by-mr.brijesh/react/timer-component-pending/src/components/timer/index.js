import React, { useEffect, useState } from "react";
import "./index.css"

export default function Timer({initial}) {

	const [time,setTime]=useState(initial);

	const [isPause, setIsPause]=useState(false);

useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(prev => {
      if (!isPause && prev > 0) return prev - 1;
      return prev;
    });
  }, 1000);

  return () => clearInterval(intervalId);
}, [isPause]);

	return (
		<div className="mt-100 layout-column align-items-center justify-content-center">
			<div className="timer-value" data-testid="timer-value">{time}</div>
			<button className="large" data-testid="stop-button" onClick={()=>setIsPause(true)} >Stop Timer</button>
		</div>
	);

}