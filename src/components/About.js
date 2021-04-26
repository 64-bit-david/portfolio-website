import React, { useRef, useEffect } from 'react';
import { SiGmail } from 'react-icons/si';
import Aos from 'aos';
import 'aos/dist/aos';
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
    <div ref={aboutref} className="about-container" data-aos="fade-up">
      <div className="header-container">
        <h2>About Me</h2>
      </div>

      <div className="profile-img-container" data-aos="fade-up">
        <img src={profilePic} alt=" Headshot of David Williamson" />
      </div>
      <div className="about-icons-container" data-aos="fade-up">
        <div className="about-icon-container">
          <a
            aria-label="Send E-mail to David Williamosn"
            href="mailto:dwilliamsonwebdev@gmail.com">
            <SiGmail />
          </a>
        </div>
      </div>
      <div className="about-text" data-aos="fade-up">
        <p>Hi there! I'm David Williamson, a javascript web developer currently in search of an entry level / junior position.</p>
        <br />
        <p>On this site you'll find some of my latest projects built to showcase the skills and technologies I have been learning on my journey to become a developer. </p>
      </div>
    </div>
  )
}

export default (About);
