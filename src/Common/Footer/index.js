import React, { useState } from 'react';
import { Container, Row , Col, Form } from 'react-bootstrap';
import './index.scss'
import {  FaMapLocationDot } from 'react-icons/fa6';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter  } from 'react-icons/fa';

// State to store the email

const Footer = () => {

    const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

// Handle email input change
const handleEmailChange = (e) => {
  setEmail(e.target.value);
};

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();  // Prevent the default form submission
  if (email) {
    // Process the email (for now, show a success message)
    setMessage(`Thank you for subscribing with ${email}!`);
    setEmail('');  // Clear the input field
  } else {
    setMessage('Please enter a valid email.');
  }
};
    return(
        <>
            <section className='footer-info'>
                <Container>
                    <Row className='gy-4'>
                        <Col md={6} lg={3}>
                            <div className='contact-info'>
                                <h4>Address</h4>
                                <div className='contact-link'>
                                    <a href=''>
                                        <FaMapLocationDot />
                                        <span>1st floor Survey No.154/1</span>
                                    </a>
                                    <a href=''>
                                        <FaPhone></FaPhone>
                                        <span>6265-480-149</span>
                                    </a>
                                    <a href=''>
                                        <FaEnvelope />
                                        <span>sachin124sharma@gmail.com</span>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="">
                                    <FaFacebookF aria-hidden="true" />
                                    </a>
                                    <a href="">
                                    <FaTwitter aria-hidden="true" />
                                    </a>
                                    <a href="">
                                    <FaLinkedinIn aria-hidden="true" />
                                    </a>
                                    <a href="">
                                    <FaInstagram aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <div className='info-details'>
                                <h4>Info</h4>
                                <p>necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                            </div>
                        </Col>
                        <Col md={6} lg={2} className='mx-auto'>
                            <div className='info-linkbox'>
                                <h4>Links</h4>
                                <div className='info-link'>
                                    <a className="active" href="/">
                                        Home
                                    </a>
                                    <a className="active" href="/about">
                                        About
                                    </a>
                                    <a className="active" href="/service">
                                        Services
                                    </a>
                                    <a className="active" href="/whyus">
                                        Why Us
                                    </a>
                                    <a className="active" href="/team">
                                        Team
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={3}>
                            <h4>
                                Subscribe
                            </h4>
                            <Form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                    required
                                />
                                <button type="submit" >
                                    Subscribe
                                </button>
                            </Form>
                            {message && <p>{message}</p>}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='footer-copyright'>
                <Container>
                    <Row>
                        <Col>
                        <p>
                            &copy; <span id="displayYear">2024</span> All Rights Reserved By Sachin Sharma
                            <a href="https://www.linkedin.com/in/sachin-sharma-bb8754181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Click & Check Profile</a>
                        </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};
export default Footer;