import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Tool from './components/tool/Tool';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Component-specific or page-specific styles

function App() {

  return (
    <>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/tool' element={<Tool/>} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
