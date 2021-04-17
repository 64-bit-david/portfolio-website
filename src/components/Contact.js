import { useRef, useEffect, useState } from 'react';



const Contact = ({ setContactRef }) => {

  const contactref = useRef();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);



  useEffect(() => {
    setContactRef(contactref);
  }, [setContactRef])


  return (
    <div className="contact-container" ref={contactref}>
      <div className="header-container">
        <h2>Contact</h2>
        <p>Feel free to get in touch!</p>
        <form
          method="post"
          name="contact"
          data-netlify="true"
          action="/contact/?success=true"
        >
          <label>Name</label>
          <input name="name" />
          <label>Email</label>
          <input name="email" />
          <label>Message</label>
          <textarea name="message" />
          <button className="btn form-btn">Send</button>
        </form>
        {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
      </div>
    </div>
  )
}

export default Contact
