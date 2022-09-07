import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useParams } from "react-router-dom";
import Styles from "../Home.module.css";
import Toast from "react-bootstrap/Toast";

const SingleMovie = () => {
  const [data, setData] = useState({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Language: "",
    Country: "",
    Awards: "",
    imdbRating: "",
    BoxOffice: "",
  });
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=29415120`)
      .then((r) => {
        return r.json();
      })
      .then((rs) => {
        setData(rs);
      });
  }, [id]);

  return (
    <>
      {data.Title === "" ? (
        <div style={{width:'100%'}} className="d-flex justify-content-center align-item-center" >
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Loading</strong>
            <small>Please Wait</small>
          </Toast.Header>
        </Toast>
        </div>
      ) : (
        <div className={Styles.FullCard}>
          <img src={data.Poster} alt="img" className={Styles.Poster} />
          <div className={Styles.data}>
            <Badge>Title :{data.Title}</Badge>
            <p>Year : {data.Year}</p>
            <p>Rated : {data.Rated}</p>
            <p>Released : {data.Released}</p>
            <p>Runtime : {data.Runtime}</p>
            <p>Genre : {data.Genre}</p>
            <p>Director : {data.Director}</p>
            <p>Writer : {data.Writer}</p>
            <p>Actors : {`${data.Actors.slice(0, 20)}...`}</p>
            <p>Language : {data.Language}</p>
            <div className={Styles.badgesdiv}>
              <Badge>Awards : {data.Awards}</Badge>
              <Badge>imdbRating : {data.imdbRating} </Badge>
              <Badge bg="secondary">
                Country : {data.Country.slice(0, 30)}
              </Badge>
              <Badge bg="secondary">BoxOffice : {data.BoxOffice}</Badge>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMovie;
