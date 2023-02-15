import React, { useRef, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos';
import { FaLinkedin } from 'react-icons/fa'
import profilePic from '../img/profile.png';

const About = ({ setAboutRef }) => {

  const aboutref = useRef();

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);



  useEffect(() => {
    setAboutRef(aboutref);
  }, [setAboutRef]);


  return (
    <div ref={aboutref} className="about-container" >
      <div className="header-container" data-aos="fade-up">
        <h2>About Me</h2>
      </div>

      <div className="profile-img-container" data-aos="fade-up">
        <img src={profilePic} alt=" Headshot of David Williamson" />
      </div>
      {/* linkedin link goes here */}
      <div className="about-icons-container" data-aos="fade-up">
        <div className="about-icon-container">
          <a
            aria-label="Link to David Williamson Linkedin Profile"
            href="https://www.linkedin.com/in/david-williamson-38925a140/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="about-text" data-aos="fade-up">
        <p>Hi there! I have recently completed a Master's Degree in Software Development and am now in pursuit of a related position for an immediate start.  </p>

        <p>On this site you'll find links to my projects which showcase the skills and technologies I have been learning and developing. </p>
      </div>
    </div>
  )
}

export default (About);
