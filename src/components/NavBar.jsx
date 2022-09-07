import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Badge, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { useState } from "react";
function NavScrollExample() {
  const setMovieTitle = useContext(MovieContext);
  const [movie, setmovie] = useState("");

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link exact="true" to="/">
            <Badge>Movie App</Badge>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex justify-content-center align-items-center">
            <input
              className="me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ outline: "none" }}
              value={movie}
              onChange={(e) => setmovie(e.target.value)}
            />
            <button
              style={{
                border: "#0d6efd 1px solid",
                background: "white",
                color: "#0d6efd",
              }}
              disabled={movie.length < 3}
              onClick={() => setMovieTitle.setMovieTitle(movie)}
              variant="outline-primary"
            >
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
