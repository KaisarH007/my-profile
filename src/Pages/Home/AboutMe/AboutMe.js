import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo from "../../../images/kaisar__1_-croped.png";
import "./AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const AboutMe = () => {
  return (
    <Container>
      <div data-aos="fade-left" className="row pt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="">
            <div>
              <h1 className="fw-bold">ABOUT ME</h1>

              <p className="fs-5">
                I’m Kaisar Hamid, I have always been passionate about web
                development. That's why I start learning web development. I am
                constantly seeking out new technologies and stay up-to-date on
                trends in the industry. Thank you for taking the time to review
                my qualifications. I look forward to sharing more about my
                skills and experiences. Feel free to contact me at
                kaisar.hamid1620@gmail.com
              </p>

              <Link
                to="/contact"
                style={{ color: "white", textDecoration: "none" }}
              >
                <button className=" btn about-button   text-white px-5 ">
                  CONTACT ME
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col-md-4 d-flex align-items-center">
          <div className="">
            {" "}
            <img
              style={{
                width: "300PX",
              }}
              src={photo}
              alt=""
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default AboutMe;
