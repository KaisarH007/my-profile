import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import project1 from "../../../images/projects/four wings-2.jpg";
import project2 from "../../../images/projects/dreamy tour.jpg";
import project3 from "../../../images/projects/Crunch fitness.jpg";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <Container className="my-5">
      <div className="d-flex align-items-center justify-content-center">
        <h3>MY PROJECTS</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Title>Four Wings</Card.Title>
              <Card.Text>This is MERN-Stack Project</Card.Text>
              <Button variant="primary" className="  text-white me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://four-wings.web.app/"
                >
                  Live Preview
                </a>
              </Button>
              <Button variant="primary" className="  text-white  me-3 ">
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Title>Dreamy Tour</Card.Title>
              <Card.Text>This is MERN-Stack Project</Card.Text>
              <Button variant="primary" className="  text-white me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://dreamy-tour.web.app/"
                >
                  Live Preview
                </a>
              </Button>
              <Button variant="primary" className="  text-white me-3 ">
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Title>Crunch Fitness</Card.Title>
              <Card.Text>This is React Project</Card.Text>
              <Button variant="primary" className="  text-white  me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://crunch-fitness-10.web.app/"
                >
                  Live Preview
                </a>
              </Button>
              <Button variant="primary" className="  text-white  me-3 ">
                Details
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AllProjects;
