import React from 'react'
import './portfolio.css'
import Test from '../../media/test.png'
import CarDealer from '../../media/car_dealership.jpg'
import HMS from '../../media/hms.jpg'
import { useInView } from 'react-intersection-observer'

const data = [
  {
    id:3,
    img: HMS,
    title: "Hospital Management System",
    github: "https://github.com/timurmalkoc/Hospital_Management_System",
    demo: "",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:6980029663884558336/"
  },
  {
    id:2,
    img: CarDealer,
    title: "Car Dealership Postgres",
    github: "https://github.com/timurmalkoc/Car-Dealership-DB",
    demo: "",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:6977664185824366593/"
  },
  {
    id:1,
    img: Test,
    title: "Test Automation",
    github: "https://github.com/timurmalkoc/AutomationProject",
    demo: "",
    video: "https://www.linkedin.com/feed/update/urn:li:activity:6977665953274712064/"
  } 
  
]


const Portfolio = () => {

  const { ref:portRef, inView: portVisible } = useInView()

  return (
    <section id='portfolio'>
      <div ref={portRef} className={`work ${portVisible? "portAnimate":""}`}><b>My Recent Works</b></div>
      <div className='portfolio'>Portfolio</div>
    
      <div className="container portfolio__container">
        {
          data.map(({id, img, title, github, demo, video}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github ? <a href={github} className='bttn' target="_blank">GitHub</a> : null}
                  {demo ? <a href={demo} className='bttn' target="_blank">Live Demo</a> : null}
                  {video ? <a href={video} className='bttn' target="_blank">Video</a> :null}
                </div>
              </article>
            )
          })
        }
      </div>    
    </section>
  )
}

export default Portfolio