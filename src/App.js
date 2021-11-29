import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import { ContactUs } from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import AllProjects from "./Pages/Home/AllProjects/AllProjects";
import Home from "./Pages/Home/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";

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
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
