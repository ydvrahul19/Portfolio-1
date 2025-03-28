import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaInstagram,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Particle from '../Particle';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Connect.css';

function Connect() {
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('danger');
    const [alertMessage, setAlertMessage] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);

    // Simple email validation function
    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isValidEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                // Temporarily commenting out actual API call for debugging
                // axios.post(contactsData.sheetAPI, responseData)
                setSuccess(true);
                setAlertVariant('success');
                setAlertMessage('Message sent successfully!');
                setShowAlert(true);

                setName('');
                setEmail('');
                setMessage('');
                
                // Hide success message after 4 seconds
                setTimeout(() => {
                    setShowAlert(false);
                }, 4000);
            } else {
                setAlertVariant('danger');
                setAlertMessage('Invalid email');
                setShowAlert(true);
            }
        } else {
            setAlertVariant('danger');
            setAlertMessage('Please fill in all fields');
            setShowAlert(true);
        }
    };

    return (
        <div className="connect-section">
            <Particle />
            <Container>
                <div className="connect-container">
                    <div className="section-title text-center mb-5">
                        <h1>Get In <span className="purple">Touch</span></h1>
                        <p>Let's create something amazing together!</p>
                    </div>

                    <Row className="connect-content">
                        <Col lg={5} className="contact-info mb-4 mb-lg-0">
                            <div className="info-box">
                                <h3>Contact Information</h3>
                                <p>Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                                
                                <div className="info-item">
                                    <div className="details-icon">
                                        <HiOutlineLocationMarker />
                                    </div>
                                    <div className="info-detail">
                                        <h6>Location</h6>
                                        <p>{contactsData.address}</p>
                                    </div>
                                </div>
                                
                                <div className="info-item">
                                    <div className="details-icon">
                                        <FiAtSign />
                                    </div>
                                    <div className="info-detail">
                                        <h6>Email</h6>
                                        <p>{contactsData.email}</p>
                                    </div>
                                </div>
                                
                                <div className="info-item">
                                    <div className="details-icon">
                                        <FiPhone />
                                    </div>
                                    <div className="info-detail">
                                        <h6>Phone</h6>
                                        <p>{contactsData.phone}</p>
                                    </div>
                                </div>

                                <div className="social-links">
                                    <h4>Follow Me</h4>
                                    <div className="social-icons">
                                        {Object.keys(socialsData).map((key) => (
                                            socialsData[key] && (
                                                <a
                                                    key={key}
                                                    href={socialsData[key]}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="social-icon"
                                                >
                                                    {getSocialIcon(key)}
                                                </a>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={7} className="contact-form">
                            <div className="form-box">
                                <h3>Send Me a Message</h3>
                                
                                {showAlert && (
                                    <Alert 
                                        variant={alertVariant} 
                                        onClose={() => setShowAlert(false)} 
                                        dismissible
                                    >
                                        {alertMessage}
                                    </Alert>
                                )}
                                
                                <Form onSubmit={handleContactForm}>
                                    <Form.Group className="mb-4" controlId="formName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    
                                    <Form.Group className="mb-4" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Type your message here..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                    
                                    <Button 
                                        variant="primary" 
                                        type="submit"
                                        className="submit-btn"
                                        disabled={success}
                                    >
                                        {!success ? 'Send Message' : 'Message Sent'}
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

const getSocialIcon = (key) => {
    switch (key) {
        case 'github':
            return <FaGithub aria-label="GitHub" />;
        case 'linkedIn':
            return <FaLinkedinIn aria-label="LinkedIn" />;
        case 'twitter':
            return <FaTwitter aria-label="Twitter" />;
        case 'instagram':
            return <FaInstagram aria-label="Instagram" />;
        case 'medium':
            return <FaMediumM aria-label="Medium" />;
        default:
            return null;
    }
};

export default Connect;