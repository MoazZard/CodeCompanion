import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import NavBar from '../common/Navbar';
import { Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleClick = () => {
    navigate('/AI'); // Navigate to /AI when button is clicked
  };
  
  return (
    <>
    <div className="mt-4">
      <h1 className="mb-4"> Welcome to CODE-COMPANION </h1>

      <p> This is a simple chatbot that uses GEMINI AI to generate responses.</p>
      <p> Any struggles or difficulties grasping a coding question? CODE-COMPANION is here to support you! </p>
    </div>
    <div className="d-flex justify-content-center mt-5">
      <button class="button-start" onClick={handleClick}>Get Started!</button>
    </div>
    </>
  );
}

export default Home;