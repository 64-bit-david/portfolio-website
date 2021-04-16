


const Nav = ({ aboutHeight, projectsHeight, contactHeight }) => {






  return (
    <nav>
      <div className="nav-list">
        <ul>
          <div className="nav-list-top">
            <li>
              <button className='btn nav-btn'>
                H
              </button>
              <h2>Home</h2>
            </li>
            <li>
              <button className='btn nav-btn'>
                A
            </button>
              <h2>About</h2>
            </li>
          </div>
          <div className="nav-list-bottom">

            <li>
              <button className='btn nav-btn'>
                P
            </button>
              <h2>Projects</h2>
            </li>
            <li>
              <button className='btn nav-btn'>
                C
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
