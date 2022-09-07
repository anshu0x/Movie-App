import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Styles from "../Home.module.css";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
const Movie = () => {
  const MovieList = useContext(MovieContext);
  const notfound = "https://fakeimg.pl/222x333/?text=notfound";
  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.movieCard}>
          {MovieList.map((m) => {
            return (
              <Card key={m.imdbID} className="my-3" style={{ width: "14rem" }}>
                <Card.Img
                  variant="top"
                  src={m.Poster !== "N/A" ? m.Poster : notfound}
                />
                <Card.Body>
                  <Card.Title>{m.Title}</Card.Title>
                  <Card.Text>Year : {m.Year}</Card.Text>
                  <Link to={`movie/${m.imdbID}`}>See Details</Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Movie;
