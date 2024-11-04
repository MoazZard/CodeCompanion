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
                <NavDropdown className='mx-auto' title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/AI">AI Assistant</NavDropdown.Item>
                </NavDropdown>
                <Navbar.Text className='mt-3'>
                    <h6>About:</h6>
                    <p>CodeCompanion is your go-to AI assistant for coding. Here to help you better grasp anything programming related.</p>
                </Navbar.Text>
                <Navbar.Text className='mt-3'>
                    <h6>Steps for use:</h6>
                    <p>1. Navigate onto the AI Assistant page. </p>
                    <p>2. Paste your code/question and enjoy a response from an AI model tuned specifically for coding. </p>
                </Navbar.Text>
                <Navbar.Text className='mt-5'>
                    <h6>Socials:</h6>
                    <div className='d-inline-flex'>
                        🔗
                        <a href="https://github.com/MoazZard" className="mx-auto">
                        -Github
                        </a>
                    </div>
                </Navbar.Text>
            </Nav>
        </Navbar>
    );
}

export default NavBar;