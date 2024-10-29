import React from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // all bootstrap styling

import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/common/Navbar';
import AI from './components/AI/AI';
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <div id="root">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AI" element={<AI />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
