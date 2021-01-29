import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        style={{ padding: '32px', fontSize: '32px' }}
        onClick={() => setShow(true)}
      >
        Make the world a better place
      </button>
      {show && <h1>Ja</h1>}
    </div>
  );
}

export default App;
