import React,{useEffect} from "react";
import Navbar from "./components/NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Movie from "./components/Movie";
import SingleMovie from "./components/SingleMovie";
const App = () => {
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  useEffect(() => {
    setTimeout(() => {
      toggleFullScreen();
    }, 2000);

    document.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") {
          toggleFullScreen();
        }
      },
      false
    );
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
};

export default App;
