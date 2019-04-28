import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouting';

import './App.css';
import Header from './core/header';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <br />
        <MainRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
