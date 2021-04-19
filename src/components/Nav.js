
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineQuestion } from 'react-icons/ai';
import { FiMessageSquare, FiHome } from 'react-icons/fi'


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
                <span className="nav-icon"><FiHome /></span>
                <span className="nav-text">Home</span>
              </button>
              {/* <h2>Home</h2> */}
            </li>
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(aboutRef)}>
                <span className="nav-icon"><AiOutlineQuestion /></span>
                <span className="nav-text">About</span>
              </button>
              {/* <h2>About</h2> */}
            </li>
          </div>
          <div className="nav-list-bottom">
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(projectsRef)}>
                <span className="nav-icon">
                  <AiOutlineFundProjectionScreen /></span><span className="nav-text">Projects</span>
              </button>
              {/* <h2>Projects</h2> */}
            </li>
            <li>
              <button
                className='btn nav-btn'
                onClick={() => executeScroll(contactRef)}>
                <span className="nav-icon">
                  <FiMessageSquare /></span>
                <span className="nav-text">Contact</span>
              </button>
              {/* <h2>Contact</h2> */}
            </li>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
