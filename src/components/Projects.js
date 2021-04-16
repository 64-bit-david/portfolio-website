import { FaReact } from 'react-icons/fa';
import { SiRedux } from "react-icons/si";
import { FaCcStripe } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa';
import { useRef, useEffect } from 'react';

import image1 from '../img/filler-img.jpg'


const Projects = ({ setProjectsHeight }) => {


  const projectsref = useRef();

  useEffect(() => {
    setProjectsHeight(projectsref.current.getBoundingClientRect().top)
  }, [setProjectsHeight])

  const card1 = () => {
    return (
      <div className="project-card project-card-1" ref={projectsref}>
        <div className="header-container">
          <h2>Projects</h2>
        </div>
        <div className="card-header">
          <h2>Writer's Desk</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A full stack MERN web app for creative writers to share their work. Users may post story or snippet, comment on other stories and donate to other writers</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="card-back-header">
              <h3>Technology</h3>
            </div>
            <div className="project-tech-list">
              <ul className="tech-icons-grid">
                <li>
                  <p>React</p>
                  <FaReact />
                </li>
                <li>
                  <p>Redux</p>
                  <SiRedux />
                </li>
                <li>
                  <p>Sass</p>
                  <FaSass />
                </li>
                <li>
                  <p>Nodejs</p>
                  <FaNodeJs />
                </li>
                <li>
                  <p>MongoDb</p>
                  <SiMongodb />
                </li>
                <li>
                  <p>Stripe</p>
                  <FaCcStripe />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="#" className="btn">Code</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const card2 = () => {
    return (
      <div className="project-card project-card-1">
        <div className="card-header">
          <h2>Writer's Desk</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A full stack MERN web app for creative writers to share their work. Users may post story or snippet, comment on other stories and donate to other writers</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="card-back-header">
              <h3>Technology</h3>
            </div>
            <div className="project-tech-list">
              <ul className="tech-icons-grid">
                <li>
                  <p>React</p>
                  <FaReact />
                </li>
                <li>
                  <p>Redux</p>
                  <SiRedux />
                </li>
                <li>
                  <p>Sass</p>
                  <FaSass />
                </li>
                <li>
                  <p>Nodejs</p>
                  <FaNodeJs />
                </li>
                <li>
                  <p>MongoDb</p>
                  <SiMongodb />
                </li>
                <li>
                  <p>Stripe</p>
                  <FaCcStripe />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="#" className="btn">Code</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }



  const card3 = () => {
    return (
      <div className="project-card project-card-1">
        <div className="card-header">
          <h2>Writer's Desk</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A full stack MERN web app for creative writers to share their work. Users may post story or snippet, comment on other stories and donate to other writers</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="card-back-header">
              <h3>Technology</h3>
            </div>
            <div className="project-tech-list">
              <ul className="tech-icons-grid">
                <li>
                  <p>React</p>
                  <FaReact />
                </li>
                <li>
                  <p>Redux</p>
                  <SiRedux />
                </li>
                <li>
                  <p>Sass</p>
                  <FaSass />
                </li>
                <li>
                  <p>Nodejs</p>
                  <FaNodeJs />
                </li>
                <li>
                  <p>MongoDb</p>
                  <SiMongodb />
                </li>
                <li>
                  <p>Stripe</p>
                  <FaCcStripe />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="#" className="btn">Code</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const card4 = () => {
    return (
      <div className="project-card project-card-1">
        <div className="card-header">
          <h2>Writer's Desk</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A full stack MERN web app for creative writers to share their work. Users may post story or snippet, comment on other stories and donate to other writers</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="card-back-header">
              <h3>Technology</h3>
            </div>
            <div className="project-tech-list">
              <ul className="tech-icons-grid">
                <li>
                  <p>React</p>
                  <FaReact />
                </li>
                <li>
                  <p>Redux</p>
                  <SiRedux />
                </li>
                <li>
                  <p>Sass</p>
                  <FaSass />
                </li>
                <li>
                  <p>Nodejs</p>
                  <FaNodeJs />
                </li>
                <li>
                  <p>MongoDb</p>
                  <SiMongodb />
                </li>
                <li>
                  <p>Stripe</p>
                  <FaCcStripe />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="#" className="btn">Code</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-container">
      {card1()}
      {card2()}
      {card3()}
      {card4()}

    </div>
  )
}

export default Projects;
