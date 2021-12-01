import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Banner.css";
import photo from "../../../images/kaisar-banner.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner-bg">
      <Container>
        <div className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="">
              {" "}
              <img
                style={{
                  width: "100%",
                }}
                src={photo}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center py-3">
            <div className="">
              <div>
                <h1 className="title-style">I'M</h1>
                <h1 className=" name-style">KAISAR HAMID</h1>
                <h2 className="mb-4 title2-style">FRONT END DEVELOPER </h2>

                <button className="btn  text-white button-bg  px-4 fs-4 ">
                  <a
                    target="blank"
                    style={{ color: "white", textDecoration: "none" }}
                    href="https://drive.google.com/file/d/1AStsQ2MaD6yQVahF-z72YPuLpjEuvwrT/view?usp=sharing"
                  >
                    <i class="fas fa-file-pdf"></i> MY RESUME
                  </a>
                </button>
                <div className="mt-3">
                  <Button
                    variant="primary"
                    className="  text-white  px-2 me-3 "
                  >
                    <a
                      target="blank"
                      style={{ color: "white", textDecoration: "none" }}
                      href="https://www.linkedin.com/in/kaisar-hamid-b160b7206/"
                    >
                      <i class="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </Button>
                  <Button variant="dark" className="  text-white  px-2 ">
                    <a
                      target="blank"
                      style={{ color: "white", textDecoration: "none" }}
                      href="https://github.com/KaisarH007"
                    >
                      <i class="fab fa-github"></i> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
