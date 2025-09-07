import React from "react";
import "../App.css";

const LogList = ({data}) => {
  return (
    <div data-testid="log-list">
      <h2>Activity Log</h2>
       {  data.length ===0 ? (  <p>No activities logged yet.</p>) :( <ul className="pl-0 log-entry-ul">
           {
            data.map( (list, index)=>(
             <li data-testid="log-entry"  key={index} className="log-entry-li mb-10 pa-10">
                  <p>
                    <strong>Exercise:</strong> {list.exercise}
                </p>
                <p>
                  <strong>Duration:</strong> {list.duration} minutes
                </p>
                <p>
                  <strong>Calories Burned:</strong> {list.caloriesBurned} kcal
                </p>
           </li>
            ))
           }
      </ul>) }
     
     
    </div>
  );
};

export default LogList;