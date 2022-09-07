import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link exact="true" to="/">
            <Badge>Movie App</Badge>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
