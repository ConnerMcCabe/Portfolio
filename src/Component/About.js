import React from "react"

function About(props) {
  return (
    <div className="about">
      <h1>About me</h1>
      <br></br>
      <p contentEditable="true" className="bio">
        I am an adaptable software developer that is into making creative problems to modern solutions
        using the many different perspectives I've picked up along the way. I like to see the big picture 
        and am all about breaking down problems into manageable solutions; give me a big enough whiteboard 
        and I can conquer the world
      </p>
      <a className="buttons" href="https://github.com/ConnerMcCabe" target="_blank" rel="noopener noreferrer">click here</a>
      
    </div>
  )
}

export default About