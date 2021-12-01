import React from "react";
import { Container } from "react-bootstrap";
import skill1 from "../../../images/skills/html-1.png";
import skill2 from "../../../images/skills/css3.png";
import skill3 from "../../../images/skills/bootstrap.png";
import skill4 from "../../../images/skills/javascript.png";
import skill5 from "../../../images/skills/react.png";
import skill6 from "../../../images/skills/firebase.png";
import skill7 from "../../../images/skills/mongodb.png";
import skill8 from "../../../images/skills/mui.png";
import skill9 from "../../../images/skills/netlify.png";
import skill10 from "../../../images/skills/nodejs.png";
import skill11 from "../../../images/skills/heroku.png";

const MySkills = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center my-5">
        <h3>MY SKILLS</h3>
      </div>
      <div className="row my-5">
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill1} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill2} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill3} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill4} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill5} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill6} alt="" />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill7} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill8} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill9} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill10} alt="" />
        </div>
        <div className="col-md-2">
          <img style={{ width: "100%" }} src={skill11} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default MySkills;
