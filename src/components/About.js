import React, { useRef, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import profilePic from '../img/profile.png';
import Slide from 'react-reveal/Slide';

const About = ({ setAboutRef }) => {

  const aboutref = useRef();



  useEffect(() => {
    setAboutRef(aboutref);
  }, [setAboutRef])
  return (
    <div ref={aboutref} className="about-container">
      <Slide bottom cascade >
        <div className="header-container">
          <h2>About</h2>
        </div>

        <div className="profile-img-container">
          <img src={profilePic} alt=" Headshot of David Williamson" />
        </div>
        <div className="about-icons-container">
          <div className="about-icon-container">
            <a href="https://www.linkedin.com/in/david-williamson-38925a140/">
              <FaLinkedin />
            </a>
          </div>
          <div className="about-icon-container">
            <a href="mailto:dwilliamsonwebdev@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
        <div className="about-text">
          <p>Hi there! I'm David Williamson, a self-taught web developer familiar with the MERN stack currently in search of a junior/entry level position. </p>
        </div>
      </Slide>
    </div>
  )
}

export default (About);
