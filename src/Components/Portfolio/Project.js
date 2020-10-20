import React, { useState } from "react";
import axios from 'axios';
import ProjectCards from './ProjectCards'

const Portfolio = () => {
  const [projects, updateProjects] = useState([]);
  
  return (
    <div className="projects-container">
      {}
      <ProjectCards />
    </div>
  )
}

export default Portfolio;