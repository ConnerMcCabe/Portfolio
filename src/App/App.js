import React from 'react';
import About from "../Component/About"
import Contact from "../Component/Contact"
import Proj from "../Component/Project"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="navigation">
        <div className="navbar">
          <Link to="/" className="navItem">Contact</Link>
          <Link to="/projects" className="navItem">Portfolio</Link>
          <Link to="/about" className="navItem">About</Link>
        </div>
    </div>
      <Route exact path="/" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Proj} />
    </div>
    </BrowserRouter>
  );
}

export default App;
