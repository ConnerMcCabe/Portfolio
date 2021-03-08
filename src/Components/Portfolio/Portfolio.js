import React from "react";
import ProjectCards from './ProjectCards'
import './Portfolio.css'

function Portfolio() {
  return (
    <div className="container">
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
    </div>
  )
}

export default Portfolio;