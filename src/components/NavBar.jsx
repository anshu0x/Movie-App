import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Badge, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { useState } from "react";
function NavScrollExample() {
  const setMovieTitle = useContext(MovieContext);
  const [movie, setmovie] = useState("");

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link exact="true" to="/">
            <Badge bg="dark">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-film"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                </svg>
              </span>
             <span> Movie Info App</span>
            </Badge>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="d-flex justify-content-center align-items-center"
          >
            <input
              className="me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ outline: "none", border: "none" }}
              value={movie}
              onChange={(e) => setmovie(e.target.value)}
            />
            <button
              style={{
                border: "#fff 1px solid",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
              disabled={movie.length < 3}
              onClick={() => setMovieTitle.setMovieTitle(movie)}
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
