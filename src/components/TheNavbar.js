import React, { useContext } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { SiReactivex } from "react-icons/si";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyContext from "../store/context";
const TheNavbar = () => {
  const ctx = useContext(MyContext);
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="link">
              <SiReactivex className="logo" />{" "}
              <span className="logo-text">By React.Js</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 nav text-center " navbarScroll>
              <Link to="/" className="link mx-5">
                Products
              </Link>
            </Nav>
            <Form className="d-flex ">
              <Button
                variant="outline-success"
                className="cart-button mx-auto my-2"
              >
                <Link to="/cartpage" className="link-btn">
                  My Cart({ctx.CartItems.length}) <BsFillCartCheckFill />
                </Link>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default React.memo(TheNavbar);
