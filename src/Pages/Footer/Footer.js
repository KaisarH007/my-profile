import React from "react";

import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

// const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
// const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;
const Footer = () => {
  return (
    <div className="footer-bg text-white">
      <div className="container">
        <div className="row pt-4 ">
          <div className="col-md-5">
            <h2>
              {" "}
              <span className="text-info">Kaisar</span> Hamid
            </h2>
            <p>
              Akbar Shah R/A, Panthanagar Lain, Pahartali, Chittagong-4202,
              Bangladesh.
            </p>
            <p>Mobile: +88 01303850826 </p>
            <p>Email: kaisar.hamid1620@gmail.com </p>
          </div>

          <div className="col-md-3">
            <h4 className="text-center">MAP</h4>
            <div className="text-center">
              <p>Home</p>
              <p>My Projects</p>
              <p>Resume</p>
              <p>About Me</p>
              <p>Contact Me</p>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="text-center">FIND ME</h4>
            <div className="text-center">
              <p>GitHub</p>
              <p>LinkedIn</p>
              <p>FaceBook</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center  p-2">
        <p>&copy; Site Code & Designed by Kaisar Hamid</p>
      </div>
    </div>
  );
};

export default Footer;
