import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // all bootstrap styling

import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/common/Navbar';
import AI from './components/AI/AI';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AI" element={<AI />} />
        </Routes>
    </Router>
  );
}

export default App;
