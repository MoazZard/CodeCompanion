import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Tool from './components/tool/Tool';


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
