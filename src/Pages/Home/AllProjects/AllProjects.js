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
        <div data-aos="fade-right" className="row  my-3">
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
              <h5> Four Wings (MERN-stack, Niche Web App)</h5>
              <p>
                &#8226; Built a MERN Stack Niche web app also Implemented of
                Admin and User Dashboard.
              </p>
              <p>
                &#8226; Admin can manage all orders and products, add new
                product, make another user admin, user can Manage her/his
                orders,can give a review.
              </p>
              <p>
                &#8226; Two Authentication Systems implemented with Firebase,
                user can sign up with Google account and register/create a new
                account by using email/password.
              </p>
              <p>
                &#8226; Transferred data from Heroku via CRUD operation to UI.
                This is full Mobile Responsive
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
        <div data-aos="fade-left" className="row my-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
            <div>
              <h2>About This Projects</h2>
              <h5> Crunch Fitness (Gym Web App)</h5>
              <p>
                &#8226; This is a Gym web App. This app is full mobile
                responsive.
              </p>
              <p>
                &#8226; Implemented Authentication System with Firebase, user
                can sign up with Google account.
              </p>
              <p>
                &#8226; Service Details are protected, user need sign up for
                seeing service details.
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
        <div data-aos="fade-right" className="row py-5">
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
              <h2>Project Overview</h2>
              <h5> Dreamy Tour (MERN-stack, Service Web App)</h5>
              <p>
                &#8226; This is a Tourism Services web app, user can book tour
                service packages by giving some necessary information.
              </p>
              <p>
                &#8226; Implemented protected route, Authentication System with
                Firebase, user can sign up with Google account.
              </p>
              <p>
                &#8226; Transferred data from Heroku via CRUD operation to UI.
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
