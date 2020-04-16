import React from 'react';
import Navbar from '../Component/Navbar/Navbar'
import About from "../Component/About"
import Contact from "../Component/Contact"
import Proj from "../Component/Project"
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
      <Route exact path="/" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Proj} />
    </div>
    </BrowserRouter>
  );
}

export default App;
