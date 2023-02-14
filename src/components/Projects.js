import { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import projectData from '../data/projectData';


const Projects = ({ setProjectsRef }) => {

  const projectsref = useRef();

  const [cardBtnHover, setCardBtnHover] = useState(false)

  const handleMouseEnter = () => {
    setCardBtnHover(true);
  };

  const handleMouseLeave = () => {
    setCardBtnHover(false);
  };




  useEffect(() => {
    setProjectsRef(projectsref);
  }, [setProjectsRef])




  return (

    <div className="projects-container" ref={projectsref}>
      <div className="header-container" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          <span className="card-prompt-mobile">
            (Tap cards for more info)
        </span>
          <span className="card-prompt-desktop">
            (Hover over cards for more info)
        </span>
        </p>
      </div>
      <div className="projects-cards-container">
        {/* insert data from the projectData file to generate the cards */}
        {projectData.map(project => (
          <ProjectCard cardData={project}/>
        ))}
      </div>
    </div>

  )
}

export default Projects;
