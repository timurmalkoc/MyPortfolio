import React from 'react'
import './contact.css'
import { TbSend } from 'react-icons/tb'

function Contact() {
  return (
    <section id='contact'>
      <div className='contact__title'><b>Get In Touch</b></div>
      <div className='contact__me'>Contact Me</div>
      <div className='container contact__container'>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="messafe" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='bttn'>Send Message <TbSend className='send'/></button>
          </form>
      </div>
    </section>
  )
}

export default Contact