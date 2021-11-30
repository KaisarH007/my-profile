import React from "react";
import { Container } from "react-bootstrap";
import photo1 from "../../../images/projects/Dreamy Tour (1).png";
import photo2 from "../../../images/projects/Dreamy Tour-full.png";
import photo3 from "../../../images/projects/Dreamy Tour (2).png";
import photo4 from "../../../images/projects/FOUR WINGS (3).png";

const Project3 = () => {
  return (
    <div className="home-bg text-white py-5">
      <Container>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center my-2">
            <div>
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
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <h2>Technology used</h2>
              <p>
                React, React Bootstrap, React Router, React Hook Form, Firebase
                Authentication, Nodejs, Express Js, MongoDB, Heroku, Firebase
                Hosting.
              </p>
            </div>
          </div>
        </div>

        {/* Projects Images  */}
        <div className="row my-5">
          <h2>Photo</h2>
          <div className="col-md-4">
            <div className="mb-3">
              <img
                className="rounded"
                style={{
                  width: "100%",
                }}
                src={photo2}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8  ">
            <div className="mb-3">
              <img
                className="rounded"
                style={{
                  width: "100%",
                }}
                src={photo1}
                alt=""
              />
            </div>
            <div>
              <img
                className="rounded"
                style={{
                  width: "100%",
                }}
                src={photo3}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project3;
