import React, {useRef, useEffect} from 'react'

const About = ({setAboutHeight}) => {

  const aboutref = useRef();

  useEffect(()=> {
    setAboutHeight(aboutref.current.getBoundingClientRect().top)
  },[setAboutHeight])

  return (
    <div ref={aboutref} className="about-container">
      <div className="header-container">
        <h2>About</h2>
      </div>
      <div className="about-text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum modi ducimus quis illo deleniti ipsa et alias consequatur, minus eveniet. Eligendi perferendis nihil magni laborum voluptas. Tenetur omnis fugiat obcaecati similique soluta architecto? Obcaecati mollitia nobis expedita repellat, minus dolorum earum voluptatibus laudantium, accusamus tenetur sit saepe? Quisquam, nostrum autem.</p>
      </div>
      
    </div>
  )
}

export default (About);
