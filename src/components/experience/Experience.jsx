import React from 'react'
import './experience.css'
import { useInView } from 'react-intersection-observer'

function Experience() {
  const { ref:expRef, inView: expVisible } = useInView()
  const front = [
    { id:1, tool:"HTML",        exp:"Experienced",img:"https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { id:2, tool:"CSS",         exp:"Experienced",img:"https://img.icons8.com/color/48/000000/css3.png" },
    { id:3, tool:"JavaScript",  exp:"Experienced",img:"https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { id:4, tool:"React",       exp:"Experienced",img:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { id:5, tool:"Redux",       exp:"Experienced",img:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" }
  ]

  const back = [
    { id:1, tool:"Python",      exp:"Experienced",  img:"https://img.icons8.com/color/48/000000/python--v1.png" },
    { id:10, tool:"Flask",      exp:"Experienced",  img:"https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
    { id:9, tool:"Django",      exp:"Experienced",  img:"https://gitlab.com/uploads/-/system/project/avatar/24625030/django-icon-0.png" },
    { id:2, tool:"Java",        exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { id:3, tool:"ExpressJS",   exp:"Basic",        img:"https://img.icons8.com/fluency/48/000000/node-js.png" },
    { id:4, tool:"NodeJS",      exp:"Basic",        img:"https://img.icons8.com/color/48/000000/nodejs.png" },
    { id:5, tool:"C++",         exp:"Basic",        img:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { id:6, tool:"PostgreSQL",  exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/postgreesql.png" },
    { id:7, tool:"MySQL",       exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/mysql-logo.png" },
    { id:8, tool:"MongoDB",     exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/mongodb.png" },
  ]

  const test = [
    { id:1, tool:"Selenuim",    exp:"Experienced",  img:"https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg" },
    { id:2, tool:"Maven",       exp:"Intermediate", img:"https://www.svgrepo.com/show/354051/maven.svg" },
    { id:3, tool:"Cucumber",    exp:"Experienced",  img:"https://cdn.iconscout.com/icon/free/png-256/cucumber-130-1175236.png" },
    { id:4, tool:"Postman",     exp:"Experienced",  img:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { id:5, tool:"Jenkins",     exp:"Intermediate", img:"https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" }
  ]
  return (

    <section id='experience'>
      <h5 ref={expRef} className={`skills ${expVisible? "expAnimate":""}`}><b>What Skills I Have</b></h5>
      <h2 className='exp'>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__sub">
          <h3 className='experience__type'>Frontend Development</h3>
          <div className="experience__content">
            {
              front.map(({id, tool,exp,img}) => {
                return(
                  <div key={id} className='experience__details'>
                      <div className='tool__title'>{tool}</div>
                      <img src={img} alt={tool} className="tool_img"/>
                      <small className='tool__exp'>{exp}</small>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* end of first column */}
        <div className="experience__sub">
          <h3 className='experience__type'>Backend Development</h3>
          <div className="experience__content">
            {
              back.map(({id, tool,exp,img}) => {
                return(
                  <div key={id} className='experience__details'>
                      <div className='tool__title'>{tool}</div>
                      <img src={img} alt={tool} className="tool_img"/>
                      <small className='tool__exp'>{exp}</small>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* end of second column */}
        <div className="experience__sub">
          <h3 className='experience__type'>Test Automation</h3>
          <div className="experience__content">
            {
              test.map(({id, tool,exp,img}) => {
                return(
                  <div key={id} className='experience__details'>
                      <div className='tool__title'>{tool}</div>
                      <img src={img} alt={tool} className="tool_img"/>
                      <small className='tool__exp'>{exp}</small>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* end of third column */}
      </div>
    </section>
  )

}

export default Experience