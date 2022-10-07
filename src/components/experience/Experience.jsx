import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

function Experience() {

  const front = [
    { id:1, tool:"HTML",        exp:"Experienced",img:"https://img.icons8.com/color/48/000000/html-5--v1.png" },
    { id:2, tool:"CSS",         exp:"Experienced",img:"https://img.icons8.com/color/48/000000/css3.png" },
    { id:3, tool:"JavaScript",  exp:"Experienced",img:"https://img.icons8.com/color/48/000000/javascript--v1.png" },
    { id:4, tool:"React",       exp:"Experienced",img:"https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" }
  ]

  const back = [
    { id:1, tool:"Python",      exp:"Experienced",  img:"https://img.icons8.com/color/48/000000/python--v1.png" },
    { id:2, tool:"Java",        exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
    { id:3, tool:"ExpressJS",   exp:"Basic",        img:"https://img.icons8.com/fluency/48/000000/node-js.png" },
    { id:4, tool:"NodeJS",      exp:"Basic",        img:"https://img.icons8.com/color/48/000000/nodejs.png" },
    { id:4, tool:"C++",         exp:"Basic",        img:"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
    { id:4, tool:"PostgreSQL",  exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/postgreesql.png" },
    { id:4, tool:"MySQL",       exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/mysql-logo.png" },
    { id:4, tool:"MongoDB",     exp:"Intermediate", img:"https://img.icons8.com/color/48/000000/mongodb.png" },
  ]

  const test = [
    { id:1, tool:"Selenuim",    exp:"Experienced",  img:"https://img.icons8.com/color/344/selenium-test-automation.png" },
    { id:2, tool:"Maven",       exp:"Intermediate", img:"https://www.svgrepo.com/show/354051/maven.svg" },
    { id:3, tool:"Cucumber",    exp:"Experienced",  img:"https://cdn.iconscout.com/icon/free/png-256/cucumber-130-1175236.png" },
    { id:4, tool:"Postman",     exp:"Experienced",  img:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { id:4, tool:"Jenkins",     exp:"Intermediate", img:"https://img.icons8.com/color/344/jenkins.png" }
  ]
  return (

    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

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