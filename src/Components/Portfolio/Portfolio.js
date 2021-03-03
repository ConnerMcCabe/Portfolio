import React, { useState } from "react";
// import axios from 'axios';
import ProjectCards from './ProjectCards'

const Portfolio = () => {
  const [projects] = useState([]);
  // , updateProjects
  
  
  return (
    <div className="projects-container">
      {projects[0] ? projects.map( project => <ProjectCards {...project} />) : <> </>}
    </div>
  )
}

export default Portfolio;