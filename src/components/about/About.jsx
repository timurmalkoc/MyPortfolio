import React from 'react'
import './about.css'
import ME from '../../media/about_me.jpg'
const About = () => {
  return (

      <section id='about'>
        <div className='about__know'><b>Get To Know</b></div>
        <div className='about__about-me'>About <b className='about-me'>Me</b></div>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>

          <div className="about__content">
            <p>I am a Full-Stack developer in the US. I graduated Sakarya University with a major Computer Systems. I am very passionate 
              about improving my coding skills & developing applications & websites & test automation. I build WebApps and Websites using Flask
              and test with Selenuim. Working for myself to improve my skills. Love to build Full-Stack applications.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About