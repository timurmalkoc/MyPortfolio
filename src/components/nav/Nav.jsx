import React from 'react'
import './nav.css'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'
import { MdContactMail, MdComputer } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : null}><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : null}><FaUserAlt/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : null}><MdComputer/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? 'active' : null}><BsTools/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : null}><MdContactMail/></a>
    </nav>
  )

}

export default Nav