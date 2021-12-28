import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../Assets/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeDown } from "../Animation";
import { motion } from "framer-motion";
// import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <motion.div initial="hidden" animate="visible">
      <StyledHeader>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand href="/">
              <motion.img
                variants={fadeDown}
                transition={{ duration: 0.75, ease: "easeOut" }}
                src={Logo}
                width="200"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="">
                <motion.div
                  variants={fadeDown}
                  transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                >
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                </motion.div>
                <motion.div
                  variants={fadeDown}
                  transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
                >
                  <NavDropdown
                    className="dropdown"
                    title="Class"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to={"/table"}>
                      Table
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/usertable"}>
                      UserTable
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/apitable"}>
                      ApiTable
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/useeffect"}>
                      UseEffect
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/axios"}>
                      AxiosApiTable
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/contextapi"}>
                      ContextApiTable
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/hoc"}>
                      Hoc
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/counter"}>
                      Redux Counter
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/reduxapitable"}>
                      Redux Api Table
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/reduxapitablefc"}>
                      Redux Api Table Fc
                    </NavDropdown.Item>
                  </NavDropdown>
                </motion.div>
                <motion.div
                  variants={fadeDown}
                  transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
                >
                  <Nav.Link as={Link} to={"/comingsoon"}>
                    Portfolio
                  </Nav.Link>
                </motion.div>
                <motion.div
                  variants={fadeDown}
                  transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
                >
                  <Nav.Link as={Link} to={"/comingsoon"}>
                    Blogs
                  </Nav.Link>
                </motion.div>
                <motion.div
                  variants={fadeDown}
                  transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                >
                  <Nav.Link className="headerbtn" as={Link} to={"/signup"}>
                    SignUp
                  </Nav.Link>
                </motion.div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </StyledHeader>
    </motion.div>
  );
}

// Styled Components
const StyledHeader = styled.div`
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
      justify-content: end;
    }
  }

  .navbar {
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 7%);
    transition: background 0.3s, border 0.3s, border-radius 0.3s,
      box-shadow 0.3s;
    background-color: white;
  }

  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    .headerbtn {
      background-color: #ff7777;
      border-color: #ff777700;
      border-radius: 5px;
      color: white !important;
    }
  }
  .nav-link a {
    color: #0000008c !important;
    text-decoration: none;
  }
  .headerbtn a {
    color: white !important;
  }
  .dropdown-item a {
    color: #0000008c !important;
    text-decoration: none;
  }
`;
export default Header;
