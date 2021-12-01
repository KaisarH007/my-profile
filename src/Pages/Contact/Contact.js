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
      <h1>
        {" "}
        <i class="fas fa-paper-plane"> </i> Contact Me
      </h1>
      <div className="row py-5">
        <div className="col-md-6">
          <div className="send-message">
            <h5>
              <i class="fas fa-paper-plane"></i> Send Your Message
            </h5>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" />

              <input type="email" name="email" placeholder="Your Email" />
              <input type="text" name="subject" placeholder="Subject" />

              <textarea name="message" placeholder="Your Message" />
              <button type="submit" className="btn btn-primary ">
                <i class="fas fa-paper-plane"> </i> SEND
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <h5>
            <i class="fas fa-search-location"></i> Also Find Me
          </h5>
          <p>
            <i class="fas fa-map-marker-alt"></i> Khulshi, Chittagong,
            Bangladesh.
          </p>
          <p>
            <i class="fas fa-mobile-alt"></i> +88 01303850826{" "}
          </p>
          <p>
            <i class="far fa-envelope"></i> kaisar.hamid1620@gmail.com{" "}
          </p>
          <Button variant="primary" className="  text-white  px-2 me-3 ">
            <a
              target="blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.linkedin.com/in/kaisar-hamid-b160b7206/"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </Button>
          <Button variant="dark" className="  text-white  px-2 ">
            <a
              target="blank"
              style={{ color: "white", textDecoration: "none" }}
              href="https://github.com/KaisarH007"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
          </Button>
        </div>
      </div>
    </Container>
  );
};
