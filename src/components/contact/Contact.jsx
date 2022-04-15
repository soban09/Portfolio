import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z0h4b5o', 'template_deuw049', form.current, 'UhC8PcDhoSLkAzY4E')
      
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sobanfarooq911@gmail.com</h5>
            <a href="mailto:sobanfarooq911@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>soban</h5>
            <a href="https://m.me/sobaan.farooq" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>My Number</h5>
            <a href="https://api.whatsapp.com/send?phone=+918279811480" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>

          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact