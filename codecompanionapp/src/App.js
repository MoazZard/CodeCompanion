import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // all bootstrap styling

import { Button, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/common/Navbar';
import AI from './components/AI/AI';
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="d-flex"> 
      <Router>
        <NavBar />
        <div className="right-side">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AI" element={<AI />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
