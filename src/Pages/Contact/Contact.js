import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Button, Container } from "react-bootstrap";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfoliogmail",
        "template_00jz0q7",
        form.current,
        "user_hzI4DhrNkgJLWIep8PCWT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <div className="row my-5">
        <div className="col-md-6">
          <div className="add-service mt-3">
            <h5>Sent Your Message</h5>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" />

              <input type="email" name="user_email" placeholder="Your Email" />

              <textarea name="message" placeholder="Your Message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <h5>Also Find Me</h5>
          <p>
            Akbar Shah R/A, Panthanagar Lain, Pahartali, Chittagong-4202,
            Bangladesh.
          </p>
          <p>Mobile: +88 01303850826 </p>
          <p>Email: kaisar.hamid1620@gmail.com </p>
          <Button variant="primary" className="  text-white  px-5 me-3 ">
            <a
              target="blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/kaisar-hamid-b160b7206/"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant="primary" className="  text-white  px-5 ">
            <a
              target="blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://github.com/KaisarH007"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Container>
  );
};
