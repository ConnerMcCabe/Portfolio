import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navbar from '../Components/Navbar/Navbar.js'
import About from "../Components/About/About.js"
import Contact from "../Components/Contact/Contact.js"
import Portfolio from "../Components/Portfolio/Portfolio.js"



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Portfolio} />
      </div>
    </BrowserRouter>
  );
}

export default App;
