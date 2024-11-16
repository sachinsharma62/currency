import './index.scss'
import Container from 'react-bootstrap/Container';
import { FaUser } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Collapse } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid style={{padding:'0 20px'}}>
                        
                    <Navbar.Brand href="#home">COINS</Navbar.Brand>
                    <button
                        className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
                        onClick={handleToggle}
                        aria-controls="navbar-nav"
                    >
                        <span className="icon-bar">{isOpen ? <FaTimes /> : <FaBars />}</span>
                    </button>
                    <Collapse in={isOpen}>
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#/">Home</Nav.Link>
                            <Nav.Link href="#/about">About</Nav.Link>
                            <Nav.Link href="#/service">Service</Nav.Link>
                            <Nav.Link href="#/whyus">Why Us</Nav.Link>
                            <Nav.Link href="#/team">Team</Nav.Link>
                            <Nav.Link href="#"> <FaUser /> Login</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
};
export default Header;