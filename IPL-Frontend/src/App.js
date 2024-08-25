import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import Home from './components/Home';
import Matches from './components/Matches';
import TopPlayers from './components/TopPlayers';
import IplRouting from './components/IPLRouting.js';
function App() {
  return (
    <>
      <Navbar/>
      <IplRouting/>
    </>
  );
}

export default App;
