import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiGmail } from 'react-icons/si'
import emailjs from 'emailjs-com';
import Loader from 'react-loader-spinner';






const Contact = ({ setContactRef }) => {

  const contactref = useRef();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [formSubmit, setFormSubmit] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setContactRef(contactref);
  }, [setContactRef])

  const sendEmail = (n) => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID, process.env.REACT_APP_EMAILJS_TEMPLATE, '#contact-form', process.env.REACT_APP_EMAILJS_PK).then(res => {
      if (res.status === 200) {
        setFormSubmit(true);
        setFormSuccess(true);
        setLoading(false);
      }
    }).catch(err => {
      setFormSubmit(true);
      setLoading(false);
      setFormSuccess(false);
      console.log(err)
    });
  }


  const onSubmit = (data) => {
    setLoading(true);
    sendEmail();
  }



  const renderFormSubmitMessage = () => {
    if (formSuccess) {
      return (
        <div className="message-submit-container">
          <p>Message sent!</p>
        </div>
      )
    } else {
      return (
        <div className="message-submit-container">
          <p>Error: Sending message failed. Please try again! </p>
        </div>
      )
    }
  }


  const renderContactForm = () => {
    return (
      <>
        <div className="header-container contact-header">
          <h2>Contact</h2>
          <p>Feel free to get in touch!</p>
        </div>

        <div className="about-icons-container">
          <div className="about-icon-container">
            <a
              aria-label="Send E-mail to David Williamosn"
              href="mailto:dwilliamsonwebdev@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            {...register('name', { required: true, maxLength: 100 })}
          />
          {
            errors.name && errors.name.type === 'required' && <p className="val-warn">Required</p>
          }
          {
            errors.name && errors.name.type === 'maxLength' &&
            <p className="val-warn">No name is that long!</p>
          }
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            {...register('email', {
              required: true,
              maxLength: 100,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              }
            })}
          />
          {
            errors.email && errors.email.type === "pattern" &&
            <p className="val-warn">Please enter valid email</p>
          }
          {
            errors.email && errors.email.type === "required" &&
            <p className="val-warn">Required</p>
          }
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            {...register('message', { required: true, maxLength: 1000 })}
          />
          {
            errors.message && errors.message.type === 'maxLength' && <p className="val-warn">Please keep messages under 1000 charaters</p>
          }
          {
            errors.message && errors.message.type === 'required' &&
            <p className="val-warn">Required</p>
          }
          {loading ?
            <div className="loader-container">
              <Loader type="Oval" color="#8B8C89" height={40}
                timeout={5000}
              />
            </div> :
            <button className="btn form-btn">Send</button>
          }
        </form>
      </>
    )
  }

  return (
    <div
      className="contact-container"
      ref={contactref}
    >
      {formSubmit ? renderFormSubmitMessage() : renderContactForm()}
    </div>
  )
}
