import React, {useRef, useEffect} from 'react'

const About = ({setAboutRef}) => {

  const aboutref = useRef();

  

  useEffect(() => {
    setAboutRef(aboutref);
  }, [setAboutRef])
  return (
    <div ref={aboutref} className="about-container">
      <div className="header-container">
        <h2>About</h2>
      </div>
      <div className="about-text">
        <p>Hi there! I'm David Williamson, a self-taught web developer familiar with the MERN stack currently in search of a junior/entry level position. </p>
      </div>
      
    </div>
  )
}

export default (About);
