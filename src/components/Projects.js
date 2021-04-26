import { FaReact, FaHtml5, FaCcStripe, FaSass, FaNodeJs } from 'react-icons/fa';
import { SiCss3, SiRedux, SiMongodb, SiMapbox } from 'react-icons/si'
import { useRef, useEffect } from 'react';


import image1 from '../img/writers-desk-min.jpg'
import image2 from '../img/reddit-news-min.jpg';
import image3 from '../img/whiskymap-min.jpg';
import image4 from '../img/ex-quiz-it.jpg';




const Projects = ({ setProjectsRef }) => {

  const projectsref = useRef();



  useEffect(() => {
    setProjectsRef(projectsref);
  }, [setProjectsRef])


  //project cards

  const card1 = () => {
    return (
      <section className="project-card project-card-1" data-aos="zoom-in">
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
              <p>
                A full stack MERN web app for creative writers to share their work.
              </p>
              <p>
                Authentication uses OAuth2 with Google, and the backend follows REST API principles.
              </p>
              <p>
                One feature of the application includes a live-feed that uses websockets to update in real-time.
              </p>
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
              <p>Setting the scope of the project was challenging, the amount of features to include in a user-generated content application like this is virtually endless but as a portfolio project I believe I struck a good balance.</p>
            </div>
            <div className="project-links-container">
              <a
                href="https://github.com/64-bit-david/Writer-App" className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Code</a>
              <a
                href="https://writers-desk.herokuapp.com/"
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

  const card2 = () => {
    return (
      <div className="project-card project-card-1" data-aos="zoom-in">
        <div className="card-header">
          <h2>Reddit Newspaper</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Reddit Newspaper Site"
                src={image2} />
            </div>
            <div className="card-desc">
              <p>A single page application that fetches top level posts and comments from the reddit api and presents the data in the style of a front page newspaper providing the user a more immersive reading experience.</p>
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
              <p>Keeping the content presentable was challenging, as each post can vary in length. This was achieved with a few methods, including adding conditions that dynamically attach css classes that alter size and typography</p>
            </div>
            <div className="project-links-container">
              <a href="https://github.com/64-bit-david/reddit-newspaper"
                className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Code</a>
              <a
                href="https://64-bit-david.github.io/reddit-newspaper/"
                className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }



  const card3 = () => {
    return (
      <div className="project-card project-card-1" data-aos="zoom-in">
        <div className="card-header">
          <h2>Distillery Map</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Screenshot of Whisky Map project"
                src={image3} />
            </div>
            <div className="card-desc">
              <p>An interactive map of Scottish whisky distilleries created with React-Map-GL, a React wrapper for Mapbox. </p>
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
              <p>Figuring out Mapbox was challenging, but it was rewarding to learn and then implement a new technology.</p>
              <br />
            </div>
            <div className="project-links-container">
              <a
                href="https://github.com/64-bit-david/whiskymap" className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Code</a>
              <a
                href="https://distillery-map.netlify.app" className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const card4 = () => {
    return (
      <div className="project-card project-card-1" data-aos="zoom-in">
        <div className="card-header">
          <h2>Ex-Quiz-it!</h2>
        </div>
        <div className="card-main">
          <div className="flip-front">
            <div className="card-img">
              <img
                alt="Snapshot of Ex-Quiz-it! Site"
                src={image4} />
            </div>
            <div className="card-desc">
              <p>Trivia CRUD website with built in authentication for users to create and take quizzes. Uses server side template rendering and built using MVC principles.</p>
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
              <p>As this was my first project much of this was challenging but it allowed me to really get to grips with Nodejs, MongoDB and DOM manipulation.</p>
            </div>
            <div className="project-links-container">
              <a
                href="https://github.com/64-bit-david/ExQuizit" className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Code</a>
              <a
                href="https://ex-quiz-it.herokuapp.com/"
                className="btn card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (

    <div className="projects-container" ref={projectsref}>
      <div className="header-container" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          <span className="card-prompt-mobile">
            (Tap cards for more info)
        </span>
          <span className="card-prompt-desktop">
            (Hover cards for more info)
        </span>
        </p>
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
