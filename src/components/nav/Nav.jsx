import React from 'react'
import './nav.css'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'
import { MdContactMail, MdComputer } from 'react-icons/md'
const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome/></a>
      <a href="#about"><FaUserAlt/></a>
      <a href="#experience"><MdComputer/></a>
      <a href="#services"><BsTools/></a>
      <a href="#contact"><MdContactMail/></a>
    </nav>
  )

}

export default Nav