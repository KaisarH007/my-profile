import React from "react";
import AllProjects from "../AllProjects/AllProjects";
import HomeBanner from "../HomeBanner/HomeBanner";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-bg text-white">
      <HomeBanner></HomeBanner>
      <AllProjects></AllProjects>
    </div>
  );
};

export default Home;
