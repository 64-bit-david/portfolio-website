import React, {useState} from 'react'
import projectData from '../data/projectData'




const ProjectCard = ({cardData}) => {

const [cardBtnHover, setCardBtnHover] = useState(false)


const handleMouseEnter = () => {
  setCardBtnHover(true);
};

const handleMouseLeave = () => {
  setCardBtnHover(false);
};


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
        <div className='card-back-top-half'>
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
          
          {/* If website is not currently deployed, then render a button which when hovered will display
            a message to the user that it is not available at this time.*/}
          {cardData.isDeployed ? 
            <a
              href={cardData.webLink}
              className="btn card-btn"
              target="_blank"
              rel="noopener noreferrer"
          >Live Demo</a>: 
          <button type='button'
             className='btn card-btn'
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
            >
            Live Demo
          </button>
          }
          
        </div>
        
      </div>
    </div>
    {
      cardBtnHover ? <div className='not-deployed-container'>
                      <h2 className='not-deployed-text'>This project is not currently deployed &#128533; </h2>
                    </div> : 
                    null
    }
    
  </section>
  )
}

export default ProjectCard