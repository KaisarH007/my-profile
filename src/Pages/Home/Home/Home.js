import React from "react";
import AllProjects from "../AllProjects/AllProjects";
import HomeBanner from "../HomeBanner/HomeBanner";
import MySkills from "../MySkills/MySkills";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-bg text-white">
      <HomeBanner></HomeBanner>
      <MySkills></MySkills>
      <AllProjects></AllProjects>
    </div>
  );
};

export default Home;
