import React from 'react';
import './App.css';
import Routes from './Routes';
import Header from './Header';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='phone'>
        <div className="app">
          <Header />
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default App;
