import React from "react";
import "./About.css";
import placeholder from "./generic.jpg"

function About() {
  return (
    <div className="about">
      <div className='container'>
        <img className="headshot" src={placeholder} alt="a placeholder"/>
          <div className="bio">
            <h2>I’m Conner, a Web Developer working with <span className="external-link">Street Cat Digital</span> and freelance development in sunny Austin, Texas.</h2>
            <p>
              I’m an adaptable web developer seeking a work that challenges me to remain nimble. 
              I like to see the big picture and breaking down problems into manageable solutions; 
              give me a big enough whiteboard and I can conquer the world.
              And there is nothing more satisfying than the rush that comes with rising to meet a challenge. 
            </p>
          </div>
      </div>
    </div>
  )
}

export default About