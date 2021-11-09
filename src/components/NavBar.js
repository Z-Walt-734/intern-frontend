import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './imgs/intern-logo-symbol-hollow.png';
import { Nav, NavDropdown, Offcanvas } from 'react-bootstrap';

export function NavBar() {

    return (
        <Navbar bg="primary" variant="light" sticky='top' expand='lg'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        alt="interns"
                    />
                    JRA Intern Portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar' />
                <Navbar.Offcanvas
                    id='offcanvasNavbar'
                    aria-labelledby='offcanvasNavbarLabel'
                    placement='end'
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel'>Navbar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='me-auto' >
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                            <NavDropdown title="Coding Problems" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href='/problem-one'>Problem One</NavDropdown.Item>
                                <NavDropdown.Item href='/problem-two'>Problem Two</NavDropdown.Item>
                                <NavDropdown.Item href='/problem-three'>Problem Three</NavDropdown.Item>
                                <NavDropdown.Item href='/problem-four'>Problem Four</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                <Nav id="bignav">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
                    <NavDropdown title="Coding Problems" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item href='/problem-one'>Problem One</NavDropdown.Item>
                        <NavDropdown.Item href='/problem-two'>Problem Two</NavDropdown.Item>
                        <NavDropdown.Item href='/problem-three'>Problem Three</NavDropdown.Item>
                        <NavDropdown.Item href='/problem-four'>Problem Four</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}