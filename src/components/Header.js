import React, { useRef, useEffect } from 'react'

const Header = ({ setHeaderRef }) => {


  const headerref = useRef();

  useEffect(() => {
    setHeaderRef(headerref);
  }, [setHeaderRef]);


  return (
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
    </header>
  )
}

export default Header
