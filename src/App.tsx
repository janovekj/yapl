import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        style={{
          padding: '59px',
          fontSize: '49px',
          backgroundColor: 'green',
          color: 'white',
        }}
        onClick={() => setShow(true)}
      >
        Make the world a better place
      </button>
      {show && <h1>Ja</h1>}

      <p>Why yapl2 you might ask? Well..</p>
    </div>
  );
}

export default App;
