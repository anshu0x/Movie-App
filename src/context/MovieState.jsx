import MovieContext from "./MovieContext";
import React, { useEffect, useState } from "react";

const MovieState = ({ children }) => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    fetch("https://www.omdbapi.com/?&apikey=29415120&s=hacker")
      .then((r) => r.json())
      .then((rs) => {
        console.log(rs.Search);
        setstate(rs.Search);
      });
  }, []);
  return (
    <MovieContext.Provider value={state}>{children}</MovieContext.Provider>
  );
};

export default MovieState;
