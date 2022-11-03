import React from 'react'
import './about.css'
import ME from '../../media/about_me.jpg'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref:aboutRef, inView: aboutVisible } = useInView()
  return (

      <section id='about'>
        <div ref={aboutRef} className={`about__know ${aboutVisible? "aboutAnimate":""}`}><b>Get To Know</b></div>
        <div className='about__about-me'>About <b className={`about-me ${aboutVisible? "aboutAnimate":""}`} >Me</b></div>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="" />
            </div>
          </div>
          
          <div className="about__content">
            <p>I am a Full-Stack developer in the US. I graduated from Sakarya University with a major Computer Systems. I am very passionate 
              about learning new technologies & developing applications & websites & test automation. I build WebApps and Websites using python-flask/django nodejs-express back-end,
              javascript-react front-end and testing UI with Selenuim. Love to build Full-Stack applications and open to learn more technologies.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About