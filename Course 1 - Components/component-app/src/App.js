import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AppButton from './components/AppButton';

function App() {
  return (
    <div className="App">
      {/* Render components */}
        <Navbar />
        <Header />
    </div>
  );
}

export default App;



