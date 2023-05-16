import './App.css';
import React from 'react';
import Navbar from './containers/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>

    </div>
  );
}
export default App;
