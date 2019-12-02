import React from 'react';
// import About from "../Component/About"
// import Contact from "../Component/Contact"
// import Proj from "../Component/Project"
import './App.css';
// import logo from "../../public/images/jumboGummyBear.png"

function App() {
  return (
    <div className="App">
      <div className="navigation">
        {/* <img src={logo} /> */}
        <div>
          <a href="" className="item">Projects</a>
          <a href="" className="item">About</a>
          <a href="" className="item">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default App;
