


const Nav = ({ aboutRef, projectsRef, contactRef, headerRef }) => {


  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }



  return (
    <nav>
      <div className="nav-list">
        <ul>
          <div className="nav-list-top">
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(headerRef)}>
                <span className="nav-first-letter">H</span><span className="nav-rest-word">ome</span>
              </button>
              <h2>Home</h2>
            </li>
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(aboutRef)}>
                <span className="nav-first-letter">A</span><span className="nav-rest-word">bout</span>
              </button>
              <h2>About</h2>
            </li>
          </div>
          <div className="nav-list-bottom">
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(projectsRef)}>
                <span className="nav-first-letter">P</span><span className="nav-rest-word">rojects</span>
              </button>
              <h2>Projects</h2>
            </li>
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(contactRef)}>
                <span className="nav-first-letter">C</span><span className="nav-rest-word">ontact</span>
              </button>
              <h2>Contact</h2>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
