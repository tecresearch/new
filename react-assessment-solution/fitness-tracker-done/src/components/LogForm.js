import React, { useState } from "react";



const LogForm = ({data,setData}) => {

  const [exercise,setExercise]=useState('');
  const [duration,setDuration]=useState("");
  const [caloriesBurned,setCaloriesBurned]=useState("");

  const [error,setError]=useState({
     exercise:"",
     duration:"",
     caloriesBurned:""
  })

const validate = () => {
  const newErrors = {};

  if (!exercise.trim()) {
    newErrors.exercise = "Exercise type must not be empty.";
   
  }

else if ( !duration.trim() || Number(duration) < 0) {
    newErrors.duration = "Duration must be a positive number.";
   
  }
else  if (!caloriesBurned.trim() || Number(caloriesBurned) < 0) {
    newErrors.caloriesBurned = "Calories must be a positive number.";
  }

  setError(newErrors);

  return Object.keys(newErrors).length === 0;
};


  const handleSubmit=(e)=>{
       e.preventDefault();
       if( validate()){

        const newData={
             exercise,
             duration,
             caloriesBurned
        }
        setData([...data,newData ]);

          setExercise("")
          setCaloriesBurned("")
          setDuration("")

          
    setError({
      exercise: "",
      duration: "",
      caloriesBurned: "",
    });

          
  }


       
  }


  const handleReset =()=>{
     
 
  setError({
    exercise: "",
    duration: "",
    caloriesBurned: "",
  });
  setCaloriesBurned("")
  setExercise("")
  setDuration("")

    setData([]);
  }


  return (
    <div className="layout column justify-content-center align-items-center">
      <form data-testid="log-form" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label>
            Exercise Type:
            <input
              type="text"
              name="exerciseType"
              value={exercise}
              placeholder="e.g., Running"
              className="ml-50"
              data-testid="input-exerciseType"
              onChange={(e)=>setExercise(e.target.value)}

            />

             {  error.exercise &&    < p data-testid="error-message" style={{ color: "red" }}>
               {error.exercise}
            </p>}
   
          </label>
        </div>
        <div className="mb-10">
          <label>
            Duration (minutes):
            <input
              type="number"
              name="duration"
              value={duration}
              placeholder="e.g., 30"
              className="ml-10"
              data-testid="input-duration"
              onChange={(e)=>setDuration(e.target.value)}
            />

      {  error.duration &&    < p data-testid="error-message" style={{ color: "red" }}>
        {error.duration}
      </p>}
          </label>
        </div>
        <div className="mb-10">
          <label>
            Calories Burned:
            <input
              type="number"
              name="caloriesBurned"
              value={caloriesBurned}
              placeholder="e.g., 300"
              className="ml-30"
              data-testid="input-caloriesBurned"
              onChange={(e)=>setCaloriesBurned(e.target.value)}
            />
          </label>

                 {  error.caloriesBurned &&    < p data-testid="error-message" style={{ color: "red" }}>
        {error.caloriesBurned}
      </p>}
    
        </div>
        <button type="submit" data-testid="btn-logActivity" className="mr-10" >
          Log Activity
        </button>
        <button type="button" data-testid="btn-resetLog" onClick={handleReset}>
          Reset Log
        </button>
      </form>

    </div>
  );
};

export default LogForm;
