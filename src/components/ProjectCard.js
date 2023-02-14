import React from 'react'

const ProjectCard = ({cardData}) => {
  return (
    <section className="project-card project-card-1" data-aos="zoom-in">
    <div className="card-header">
      <h2>{cardData.title}</h2>
    </div>
    <div className="card-main">
      <div className="flip-front">
        <div className="card-img">
          <img
            alt={cardData.imgAlt}
            src={cardData.img} />
        </div>
        <div className="card-desc">
          {cardData.frontDescription}
        </div>
      </div>
      <div className="flip-back">
        <div className="card-back-header">
          <h3>Technology</h3>
        </div>
        <div className="project-tech-list">
         
          <ul className="tech-icons-grid">
          {cardData.iconData.map(icon => (
                <li>
                    <p>{icon.name}</p>
                    <icon.icon/>
                </li>
            ))}
          </ul>
        </div>
        <div className="card-back-text">
          <p>{cardData.backDescription}</p>
        </div>
        <div className="project-links-container">
          <a
            href={cardData.repoUrl} className="btn card-btn"
            target="_blank"
            rel="noopener noreferrer"
          >Code</a>
          <a
            href={cardData.webLink}
            className="btn card-btn"
            target="_blank"
            rel="noopener noreferrer"
          >Live Demo</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectCard