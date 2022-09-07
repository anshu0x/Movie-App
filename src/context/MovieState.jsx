import MovieContext from "./MovieContext";
import React, { useEffect, useState } from "react";

const MovieState = ({ children }) => {
  const [state, setstate] = useState([]);
  const [movie,setMovieTitle] = useState('panda')
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?&apikey=29415120&s=${movie}`)
      .then((r) => r.json())
      .then((rs) => {
        setstate(rs.Search);
      });
  }, [movie]);
  return (
    <MovieContext.Provider value={{state,setMovieTitle}}>{children}</MovieContext.Provider>
  );
};

export default MovieState;
