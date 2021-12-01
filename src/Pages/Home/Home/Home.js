import React from "react";
import { ContactUs } from "../../Contact/Contact";
import AllProjects from "../AllProjects/AllProjects";
import AboutMe from "../AboutMe/AboutMe";
import MySkills from "../MySkills/MySkills";
import "./Home.css";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <div className="home-bg text-white">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MySkills></MySkills>
      <AllProjects></AllProjects>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
