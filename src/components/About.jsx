import React, { useRef, useEffect } from 'react';
import { FaLinkedin } from 'react-icons/fa'
import profilePic from '../assets/profile.png';
import { motion } from 'framer-motion';

const About = ({ setAboutRef }) => {

  const aboutref = useRef();

  useEffect(() => {
    setAboutRef(aboutref);
  }, [setAboutRef]);

  
  const aboutVariant = {
    visible: { opacity: 1, transition: { duration: .4 } },
    hidden: { opacity: 0, transition: { duration: .4 } }

  }


  return (
    <motion.div
       ref={aboutref} 
       className="about-container"
       variants={aboutVariant}
       initial="hidden"
       viewport={{ once: true }}
       whileInView="visible"
       >
      <div className="header-container">
        <h2>About Me</h2>
      </div>

      <div className="profile-img-container">
        <img src={profilePic} alt=" Headshot of David Williamson" />
      </div>
      <div className='about-icons-container'>
        <div className='about-icon-container'>
          <a
            aria-label="Link to David Williamson Linkedin Profile"
            href="https://www.linkedin.com/in/david-williamson-38925a140/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="about-text">
        <p>Hi there! I have recently completed a Master's Degree in Software Development and am now in pursuit of a related position for an immediate start.  </p>

        <p>On this site you'll find links to my projects which showcase the skills and technologies I have been learning and developing. </p>
      </div>
    </motion.div>
  )
}

export default (About);