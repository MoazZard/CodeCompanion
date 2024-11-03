import { useState } from 'react';
import React from "react";
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [count, setCount] = useState(0); // example state variable for memory purposes

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="d-flex flex-column p-5">
            <Navbar.Brand as={Link} to="/" className="mx-auto">CODE-COMPANION</Navbar.Brand>
            <Nav className="flex-column mt-3">
                <NavDropdown className='mx-auto' title="Options" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/AI">AI Assistant</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Text className='mt-3'>
                    <h6>About:</h6>
                    CodeCompanion is your go-to AI assistant for coding. Here to help you better grasp anything programming related.
                </Navbar.Text>
            </Nav>
        </Navbar>
    );
}

export default NavBar;