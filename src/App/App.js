import React from 'react';
import About from "../Component/About"
import Contact from "../Component/Contact"
import Proj from "../Component/Project"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
// import logo from "../../public/images/jumboGummyBear.png"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Proj} />
      <div className="navigation">
        {/* <img src={logo} /> */}
        <div>
          <Link to="/" className="item">Contact</Link>
          <Link to="/projects" className="item">Projects</Link>
          <Link to="/about" className="item">About</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
