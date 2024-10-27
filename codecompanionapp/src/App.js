import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // all bootstrap styling

import { Button } from 'react-bootstrap'
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
