import React, { useRef, useEffect, useState } from 'react';
import { IoCogOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import Header from './Header';
import Projects from './Projects';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

const App = () => {

  const cogRef = useRef();

  const [scrollHeight, setScrollHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [cogPosition, setCogPosition] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [projectsHeight, setProjectsHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);


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

  //function will take height of component(distance from top)
  //and return as % relative to document height
  const convertHeight = (height) => {
    return (height / docHeight * 100)
  }

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
    <main>
      {renderCog()}
      <Header />
      <Nav
        aboutHeight={convertHeight(aboutHeight)} projectsHeight={convertHeight(projectsHeight)} contactHeight={convertHeight(contactHeight)} />
      <About
        setAboutHeight={setAboutHeight}
      />
      <Projects setProjectsHeight={setProjectsHeight} />
      <Contact setContactHeight={setContactHeight} />
    </main>
  )

}


export default App
