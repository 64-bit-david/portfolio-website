import React, { useRef, useEffect } from 'react'

const Header = ({ setHeaderRef }) => {


  const headerref = useRef();

  useEffect(() => {
    setHeaderRef(headerref);
  }, [setHeaderRef]);


  return (
    <div
      className="main-header-container"
      ref={headerref}
    >
      <h1>David Williamson</h1>
      <br />
      <h1>Web Developer</h1>
    </div>
  )
}

export default Header
