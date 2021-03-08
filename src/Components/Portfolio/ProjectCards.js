import React from "react"

function ProjectCard() {
  return (
    <div className="cards">
      <a className="card" href="https://www.youtube.com/">
        <span className='card-header'>
          <span className='card-title'>
            <h3>THIS IS A CARD TITLE</h3>
          </span>
        </span>
        <span className="card-summary">
          A brief summary of the item and content of the page/ additional details
        </span>
        <span className="card-meta">
          this is card meta, such as publish date or other pop up
        </span>
      </a>
    </div>
  )
}

export default ProjectCard;