import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  NavLink
} from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <>
      <Col sm={2}>
        <Navbar
          className="navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="index.html">
              <Image
                src="/src/assets/logo/logo.png"
                alt="SpotyLogo"
                width="131"
                height="40"
                className="ms-2"
              />
              <Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </Button>
              <Navbar.Collapse
                className="collapse navbar-collapse"
                id="navbarNavAltMarkup"
              >
                <Navbar className="navbar-nav mt-4">
                  <ul>
                    <ListGroup>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="#"
                      >
                        <HouseDoorFill className="specialSize" />
                        <p className="d-contents fsSpecial">&nbsp; Home</p>
                      </NavLink>
                    </ListGroup>
                    <ListGroup>
                      <NavLink
                        className="nav-item d-flex align-items-center"
                        href="#"
                      >
                        <BookFill className="specialSize" />{" "}
                        <p className="d-contents fsSpecial">
                          &nbsp; Your Library{" "}
                        </p>
                      </NavLink>
                    </ListGroup>
                    <ListGroup>
                      <InputGroup className="mt-4">
                        <Form.Control
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <Button
                          variant="black"
                          className=" btn-sm h-100 border border-1-whitesmoke"
                        >
                          <InputGroup.Text
                            className="bg-black border border-0"
                            style={{ color: "#6c757d" }}
                          >
                            {" "}
                            GO
                          </InputGroup.Text>
                        </Button>
                      </InputGroup>
                    </ListGroup>
                  </ul>
                </Navbar>
              </Navbar.Collapse>
            </Navbar.Brand>
          </Container>
          <Nav className="nav-btn d-flex flex-column ms-4">
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
            <div>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </Nav>
        </Navbar>
      </Col>
    </>
  );
};
export default SideBar;
