import { useRef, useEffect } from 'react';



const Contact = ({ setContactRef }) => {

  const contactref = useRef();



  useEffect(() => {
    setContactRef(contactref);
  }, [setContactRef])


  return (
    <div className="contact-container" ref={contactref}>
      <div className="header-container">
        <h2>Contact</h2>
        <p>Feel free to get in touch!</p>
        <form>
          <label>Name</label>
          <input name="name" />
          <label>Email</label>
          <input name="email" />
          <label>Message</label>
          <textarea name="message" />
        </form>
      </div>
    </div>
  )
}

export default Contact
