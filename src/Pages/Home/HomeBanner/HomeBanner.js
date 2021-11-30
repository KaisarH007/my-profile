import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo from "../../../images/kaisar__1_-croped.png";
const HomeBanner = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="">
            {" "}
            <img
              style={{
                width: "300PX",
                clipPath: "circle()",
              }}
              src={photo}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="">
            <div>
              <h1 className="fw-bold">KAISAR HMAID</h1>
              <h6 className="text-secondary">Front-End Developer</h6>
              <p>
                I’m Kaisar Hamid, I have always been passionate about web
                development. That's why I start learning web development. I am
                constantly seeking out new technologies and stay up-to-date on
                trends in the industry. Thank you for taking the time to review
                my qualifications. I look forward to sharing more about my
                skills and experiences. Feel free to contact me at
                kaisar.hamid1620@gmail.com
              </p>
              <Button variant="primary" className="  text-white  px-5 ">
                <a
                  target="blank"
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1AStsQ2MaD6yQVahF-z72YPuLpjEuvwrT/view?usp=sharing"
                >
                  MY RESUME
                </a>
              </Button>

              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                <button className="btn button-bg sm-ms-0 sm-ms-0 ms-3 sm-mt-3  text-white px-5 ">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeBanner;
