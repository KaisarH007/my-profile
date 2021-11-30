// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import photo from "../../images/kaisar__1_-croped.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
// import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
// const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
// const logIntIcon = <FontAwesomeIcon icon={faSignInAlt} />;
const NavBar = () => {
  return (
    <>
      <Navbar className="nav-bg" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Nav.Link className=" d-flex" as={Link} to="/home">
              <h3 className=" text-white">
                <img
                  style={{
                    width: "40px",
                    clipPath: "circle()",
                  }}
                  src={photo}
                  alt=""
                />
                <span className="text-info"> KAISAR</span> HAMID{" "}
              </h3>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end  fw-bold">
            <Nav.Link className="text-white" as={Link} to="/projects">
              <h6>PROJECTS</h6>
            </Nav.Link>

            <h6>
              {" "}
              <a
                target="blank"
                style={{ color: "white", textDecoration: "none" }}
                href="https://drive.google.com/file/d/1AStsQ2MaD6yQVahF-z72YPuLpjEuvwrT/view?usp=sharing"
              >
                RESUME
              </a>
            </h6>
            <Nav.Link className="text-white" as={Link} to="/blogs">
              <h6>BLOGS</h6>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              <h6>ABOUT ME</h6>
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/contact">
              <h6>CONTACT ME</h6>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
