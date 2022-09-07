import React from "react";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Styles from "../Home.module.css";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
const Movie = () => {
  const MovieList = useContext(MovieContext);
  const notfound = "https://fakeimg.pl/222x333/?text=notfound";
  return (
    <>
      {MovieList.state?.length > 0 ? (
        <main className={Styles.main}>
          <div className={Styles.movieCard}>
            {MovieList.state.map((m) => {
              return (
                <Link key={m.imdbID} to={`movie/${m.imdbID}`}>
                  <Card  className={`${Styles.SingleCard} my-3`}>
                    <Card.Img
                      variant="top"
                      src={m.Poster !== "N/A" ? m.Poster : notfound}
                    />
                    <Card.Body className={Styles.cardBody}>
                      <Card.Title>{m.Title.slice(0, 18)}</Card.Title>
                      <Link to={`movie/${m.imdbID}`}>See Details</Link>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </main>
      ) : (
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-center align-item-center"
        >
          <Toast>
            <Toast.Header>
              <strong className="me-auto">No Result Found</strong>
              <small>Pls Search Something else</small>
              <Link to={'/'}>Go back</Link>
            </Toast.Header>
          </Toast>
        </div>
      )}
    </>
  );
};

export default Movie;
