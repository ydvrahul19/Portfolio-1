import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from 'emailjs-com';
import Particle from "../Particle";
import "./Connect.css";

function Connect() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      }, (error) => {
        console.log(error.text);
        setStatus("Failed to send message. Please try again.");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <Container fluid className="connect-section">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="connect-header">
            <h1 className="heading">
              Let's <span className="purple">Connect </span>
            </h1>
            <p className="connect-description">
              Feel free to reach out for collaborations or just a friendly hello! 👋
            </p>
          </Col>
        </Row>

        <Row className="connect-cards-wrapper">
          <Col md={6} className="connect-card">
            <div className="connect-card-inner">
              <h3>Get In Touch</h3>
              <Form ref={form} onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="user_name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                  Send Message
                </Button>
                {status && <div className="mt-3 text-center status-message">{status}</div>}
              </Form>
            </div>
          </Col>

          <Col md={6} className="connect-card">
            <div className="connect-card-inner">
              <h3>Social Media</h3>
              <div className="social-links">
                <a
                  href="https://github.com/ydvrahul19"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiFillGithub className="social-icon" />
                </a>
                <a
                  href="https://x.com/ydvrahul19"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiOutlineTwitter className="social-icon" />
                </a>
                <a
                  href="https://linkedin.com/in/rahul-yadav-679193190/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <FaLinkedinIn className="social-icon" />
                </a>
                <a
                  href="https://instagram.com/iiknowyoouknowme"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                >
                  <AiFillInstagram className="social-icon" />
                </a>
              </div>
              <div className="contact-info mt-4">
                <div className="info-item">
                  <AiFillMail className="icon" />
                  <a href="mailto:ydvrahul5616@gmail.com">ydvrahul5616@gmail.com</a>
                </div>
                <div className="info-item">
                  <FaLinkedinIn className="icon" />
                  <a href="https://linkedin.com/in/rahul-yadav-679193190/" target="_blank" rel="noreferrer">
                    Rahul Yadav
                  </a>
                </div>
                <div className="info-item">
                  <AiFillGithub className="icon" />
                  <a href="https://github.com/ydvrahul19" target="_blank" rel="noreferrer">
                    Rahul Yadav
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Connect;
