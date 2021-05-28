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
        data-aos="fade-in"
        data-aos-delay="2500"
        data-aos-duration="4000"
        data-aos-easing="ease-in"
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
        <h1
          data-aos="fade-down"
          data-aos-delay="1500"
        >David Williamson</h1>
        <br />
        <h1
          data-aos="fade-up"
          data-aos-delay="2000"
        >Web Developer</h1>
        {renderDownArrow()}
      </header>
    </>
  )
}

export default Header
