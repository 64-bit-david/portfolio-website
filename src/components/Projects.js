import { FaReact, FaHtml5, FaCcStripe, FaSass, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiRedux, SiMongodb, SiMapbox } from 'react-icons/si'
import { useRef, useEffect } from 'react';

import image1 from '../img/filler-img.jpg'


const Projects = ({ setProjectsRef }) => {


  const projectsref = useRef();



  useEffect(() => {
    setProjectsRef(projectsref);
  }, [setProjectsRef])


  const card1 = () => {
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
              <p>A full stack MERN web app for creative writers to share their work. Users can post new stories, snippets and comments as well as support other writers with a donation.</p>
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
              <a href="https://github.com/64-bit-david/Writer-App" className="btn card-btn">Code</a>
              <a href="https://writers-desk.herokuapp.com/" className="btn card-btn">Live Demo</a>
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
          <h2>Reddit Newspaper</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A single page application that fetches top level posts from the reddit api and presents the data in the style of a front page newspaper providing the user a more immersive reading experience.  </p>
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
                  <p>CSS</p>
                  <SiCss3 />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/64-bit-david/reddit-newspaper" className="btn card-btn">Code</a>
              <a href="https://64-bit-david.github.io/reddit-newspaper/" className="btn card-btn">Live Demo</a>
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
          <h2>Whisky Map</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>A single page application that displays an interactive map of Scottish Whisky distilleries using mapbox and the corresponding react wrapper react-map-gl wrapper </p>
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
                  <p>CSS</p>
                  <SiCss3 />
                </li>
                <li>
                  <p>Mapbox</p>
                  <SiMapbox />
                </li>
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsa  ffsad  dsf fsd dfsfd fd fd  f dafs fds a fd saf dsafdsa f</p>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/64-bit-david/whiskymap" className="btn card-btn">Code</a>
              <a href="https://wizardly-goldwasser-673228.netlify.app/" className="btn card-btn">Live Demo</a>
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
          <h2>Ex-Quiz-it!</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Writer's Desk Site"
                src={image1} />
            </div>
            <div className="card-desc">
              <p>Trivia website for users to create and take quizzes. Uses server side template rendering. Built using MVC principles.</p>
            </div>
          </div>
          <div className="flip-back">
            <div className="card-back-header">
              <h3>Technology</h3>
            </div>
            <div className="project-tech-list">
              <ul className="tech-icons-grid">
                <li>
                  <p>HTML</p>
                  <FaHtml5 />
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
              </ul>
            </div>
            <div className="card-back-text">
              <p>lorem fdsjafdja;lk fjskdalfjsladk; flfhvm;kl fnjklfd fdsh d s s fd  fds fds adfsfsd f dsda fd sda f ds f asf dsa fsd af sda fdssadf  fds fds sfda fds fsd afdsasdfaklsd;akfdals;;</p>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/64-bit-david/ExQuizit" className="btn card-btn">Code</a>
              <a href="https://ex-quiz-it.herokuapp.com/" className="btn card-btn">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="projects-container" ref={projectsref}>
      <div className="header-container">
        <h2>Projects</h2>
        <p>(Tap cards for more info)</p>
      </div>
      <div className="projects-cards-container">
        {card1()}
        {card2()}
        {card3()}
        {card4()}
      </div>

    </div>
  )
}

export default Projects;
