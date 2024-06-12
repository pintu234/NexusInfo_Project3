import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topbar from "./Topbar";
import Footer from "./Footer";
import "./ContactUs.css";

const ContactUS = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "post",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setname("");
      setemail("");
      setmessage("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Topbar />
      <img className=" ctj" src="contactus.webp" alt="contactus" />
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h2 className="display-4 mb-4">Contact Us</h2>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">
              Please share with us your requirement and our experts will get in
              touch with you to offer customized solutions for your needs.
            </h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              onSubmit={collectData}
              className="contact_form w-100"
              method="post"
            >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control "
                    type="text"
                    id="name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                  <br />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                </Col>
              </Row>
              <br />
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                rows="5"
                placeholder="Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                style={{ color: "black" }} // Set text color to black
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button
                    className="btn ac-btn"
                    type="submit"
                    variant="primary"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
              <br />
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUS;
