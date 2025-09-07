import React from "react";

const MovieCard = ({movies, watchListMovies, setWatchListMovies, isWatchList=false}) => {


 const inWatchMovie =(id)=>watchListMovies.find( (m)=>m.id===id);
  

  const addMovies =(id)=>{

    if(!inWatchMovie(id)){

       const movie=movies.find ((m)=>m.id===id);

       setWatchListMovies([...watchListMovies,movie]);
    }

       
  }

  const removeMovie =(id)=>{
       
      const updatedMovie=watchListMovies.filter( (m)=>m.id!==id);
      setWatchListMovies(updatedMovie);
  }
   
  return (
    // set all data-testids according to the movie id.
    // Ex: on the movie card the data-testid for movie with id:1  will be movie-card-1
      <div>
           {
               movies.map (({title, id})=>{

                 const added=inWatchMovie(id);

                 console.log("the value of added is :",added);

                   return (
                      <div  key={id} className="movie-card" data-testid={`movie-card-${id}`}>
                            <h3   data-testid={`movie-title-${id}`}>{title}</h3>
                            { isWatchList?  (<button className="danger" data-testid={`remove-btn-${id}`} onClick={()=>removeMovie(id)}>
                              Remove
                            </button> ):
            
                        (  <button data-testid={`add-btn-${id}`} onClick={()=>addMovies(id)}  disabled={added} >
                             {added ? "Added" :"Add to WatchList"}
                            </button>)}
                        
                      </div>
                   )
               })
           }


      </div>


  );
};

export default MovieCard;