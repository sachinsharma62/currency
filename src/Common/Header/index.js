import './index.scss'
import Container from 'react-bootstrap/Container';
import { FaUser } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">COINS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" 
                        style={{
                            border: 'none',
                            background: 'transparent',
                            fontSize: '30px',
                            color: '#000',
                        }}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/service">Service</Nav.Link>
                        <Nav.Link href="/whyus">Why Us</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="#"> <FaUser /> Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};
export default Header;