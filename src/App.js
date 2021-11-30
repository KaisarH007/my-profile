import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import { ContactUs } from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import AllProjects from "./Pages/Home/AllProjects/AllProjects";
import Home from "./Pages/Home/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";
import Project1 from "./Pages/ProjectDetails/Project1/Project1";
import Project2 from "./Pages/ProjectDetails/Project2/Project2";
import Project3 from "./Pages/ProjectDetails/Project3/Project3";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <ContactUs></ContactUs>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/projects">
          <AllProjects></AllProjects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path="/project1">
          <Project1></Project1>
        </Route>
        <Route path="/project2">
          <Project2></Project2>
        </Route>
        <Route path="/project3">
          <Project3></Project3>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
