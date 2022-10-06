import React from 'react'
import './portfolio.css'
import Test from '../../media/test.png'

const data = [
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
  return (
    <div id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
    
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
                  {github ? <a href={github} className='btn' target="_blank">GitHub</a> : null}
                  {demo ? <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a> : null}
                  {video ? <a href={video} className='btn' target="_blank">Video</a> :null}
                </div>
              </article>
            )
          })
        }
      </div>    
    </div>
  )
}

export default Portfolio