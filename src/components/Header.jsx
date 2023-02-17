import React, { useRef, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { CgChevronDoubleDownR } from 'react-icons/cg';

const Header = ({ setHeaderRef, aboutRef }) => {


  const headerref = useRef();

  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    setHeaderRef(headerref);
  }, [setHeaderRef]);


  const renderDownArrow = () => {
    return (
      <button
        className="down-btn"
        onClick={() => {
          executeScroll(aboutRef)
        }}>
        <IconContext.Provider value={{
          className: "cog"
        }}>
          <CgChevronDoubleDownR />
        </IconContext.Provider>
      </button>
    )
  }

  return (
    <>
      <header
        className="main-header-container"
        ref={headerref}
      >
        <h1>David Williamson: Project Portfolio Site</h1>
        {renderDownArrow()}
      </header>
    </>
  )
}

export default Header