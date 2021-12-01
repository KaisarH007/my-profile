import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo from "../../images/kaisar__1_-croped.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  return (
    <div className="home-bg text-white py-5">
      <Container>
        <div data-aos="zoom-in-up" className="row">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="d-flex justify-content-center">
              {" "}
              <img
                style={{
                  width: "300PX",
                }}
                src={photo}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="mt-5 d-flex align-items-center">
              <div>
                <h1 className="fw-bold">KAISAR HMAID</h1>
                <h6 className="text-secondary">Front-End Developer</h6>
                <p>
                  I’m Kaisar Hamid, I have always been passionate about web
                  development. That's why I start learning web development. I am
                  constantly seeking out new technologies and stay up-to-date on
                  trends in the industry. Thank you for taking the time to
                  review my qualifications. I look forward to sharing more about
                  my skills and experiences. Feel free to contact me at
                  kaisar.hamid1620@gmail.com
                </p>
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

export default About;
