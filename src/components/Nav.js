import { IoCogOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { useRef, useEffect, useState } from 'react';


const Nav = () => {

  const cogRef = useRef();
  const [scrollHeight, setScrollHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [cogPosition, setCogPosition] = useState(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollHeight(+window.pageYOffset);
    })
  }, [])

  useEffect(() => {
    setRotation(scrollHeight);
    setCogPosition(scrollHeight / docHeight * 100)
  })

  useEffect(() => {
    setDocHeight(window.document.body.offsetHeight)
  })



  console.log(rotation);
  return (
    <nav>
      <div className="cog-container">
        <IconContext.Provider value={{
          className: "cog"
        }}>

          <div style={{
            transform: `translateY(${cogPosition}vh)`
          }}>
            <IoCogOutline ref={cogRef} style={{
              transform: `rotate(${rotation}deg)`,
            }} />
          </div>
        </IconContext.Provider>
      </div>
      <div className="nav-list">
        <ul>
          <li>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
