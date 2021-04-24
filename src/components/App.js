import React, { useRef, useEffect, useState } from 'react';
import { IoCogOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Projects from './Projects';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {

  const cogRef = useRef();

  const [scrollHeight, setScrollHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [cogPosition, setCogPosition] = useState(0);
  const [docHeight, setDocHeight] = useState(0);


  const [aboutRef, setAboutRef] = useState(null);
  const [projectsRef, setProjectsRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [headerRef, setHeaderRef] = useState(null);


  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(+window.pageYOffset);
    })
  }, [setScrollHeight])

  useEffect(() => {
    setRotation(scrollHeight);
    setCogPosition(scrollHeight / docHeight * 100)
  }, [setRotation, scrollHeight, docHeight])

  useEffect(() => {
    setDocHeight(window.document.body.offsetHeight)
  }, [setDocHeight])




  const renderCog = () => {
    return (
      <div
        ref={cogRef}
        className="cog-container">
        <IconContext.Provider value={{
          className: "cog"
        }}>

          <div style={{
            transform: `translateY(${cogPosition}vh)`
          }}>
            <IoCogOutline style={{
              transform: `rotate(${rotation}deg)`,
            }} />
          </div>
        </IconContext.Provider>
      </div>
    )
  }


  return (
    <>
      {renderCog()}
      <Header setHeaderRef={setHeaderRef} />
      <Nav
        headerRef={headerRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef} />
      <main>
        <About
          setAboutRef={setAboutRef}
        />
        <Projects
          setProjectsRef={setProjectsRef}
        />
        <Contact
          setContactRef={setContactRef}
        />
        <Footer />
        <div className="background-svg"></div>
      </main>
    </>
  )

}


export default App
