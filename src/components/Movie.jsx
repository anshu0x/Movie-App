import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Styles from "../Home.module.css";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
const Movie = () => {
  const MovieList = useContext(MovieContext);
  const notfound = "https://fakeimg.pl/222x333/?text=notfound";
  return (
    <>
      <main className={Styles.main}>
        <div className={Styles.movieCard}>
          {MovieList.state.map((m) => {
            return (
              <Link to={`movie/${m.imdbID}`}>
                <Card key={m.imdbID} className={`${Styles.SingleCard} my-3`}>
                  <Card.Img
                    variant="top"
                    src={m.Poster !== "N/A" ? m.Poster : notfound}
                  />
                  <Card.Body className={Styles.cardBody}>
                    <Card.Title>{m.Title.slice(0,18)}</Card.Title>
                    <Link to={`movie/${m.imdbID}`}>See Details</Link>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Movie;
