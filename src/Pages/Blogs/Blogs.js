import React from "react";
import "./Blog.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Blogs = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="blogs-section d-flex align-items-center justify-content-center"
    >
      <div>
        <h1 className="name-style">Blogs Coming soon...</h1>
      </div>
    </div>
  );
};

export default Blogs;
