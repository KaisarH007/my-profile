import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import fourwings from "../../../images/projects/FOUR WINGS (4).png";
import crunch from "../../../images/projects/Crunch Fitness (4).png";
import dreamy from "../../../images/projects/Dreamy Tour (4).png";

const AllProjects = () => {
  return (
    <div className="home-bg text-white pt-5">
      <Container>
        <div className="d-flex align-items-center justify-content-center">
          <h3>MY PROJECTS</h3>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <div>
              <img
                className="rounded"
                style={{
                  width: "100%",
                }}
                src={fourwings}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
            <div>
              <h2>About This Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                architecto! Distinctio veritatis autem libero, sint a, mollitia
                molestias, magnam nisi molestiae nobis doloribus cum omnis!
                Ducimus officiis quaerat consequatur dignissimos.
              </p>
              <button className=" btn button-bg  text-white  me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://four-wings.web.app/"
                >
                  Live Preview
                </a>
              </button>
              <Link to="/project1">
                <Button variant="primary" className="  text-white  me-3 ">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
            <div>
              <h2>About This Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                architecto! Distinctio veritatis autem libero, sint a, mollitia
                molestias, magnam nisi molestiae nobis doloribus cum omnis!
                Ducimus officiis quaerat consequatur dignissimos.
              </p>
              <button className=" btn button-bg text-white  me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://crunch-fitness-10.web.app/"
                >
                  Live Preview
                </a>
              </button>
              <Link to="/project2">
                <Button variant="primary" className="  text-white  me-3 ">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className="rounded"
                style={{ width: "100%" }}
                src={crunch}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6">
            <div>
              <img
                className="rounded"
                style={{ width: "100%" }}
                src={dreamy}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
            <div>
              <h2>About This Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                architecto! Distinctio veritatis autem libero, sint a, mollitia
                molestias, magnam nisi molestiae nobis doloribus cum omnis!
                Ducimus officiis quaerat consequatur dignissimos.
              </p>
              <button className="btn button-bg  text-white  me-3 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://dreamy-tour.web.app/"
                >
                  Live Preview
                </a>
              </button>
              <Link to="/project3">
                <Button variant="primary" className="  text-white  me-3 ">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProjects;
