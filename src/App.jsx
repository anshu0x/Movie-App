import React from "react";
import Navbar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Movie from "./components/Movie";
import SingleMovie from "./components/SingleMovie";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route
          path="/movie/:id"
          element={
            <SingleMovie/>
          }
        />
      </Routes>
    </>
  );
};

export default App;
