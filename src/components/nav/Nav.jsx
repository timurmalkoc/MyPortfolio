import React from 'react'
import './nav.css'
import { FaHome, FaUserAlt } from 'react-icons/fa'
import { AiTwotoneCode } from 'react-icons/ai'
import { MdContactMail, MdComputer } from 'react-icons/md'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

const Nav = () => {
  const { ref:navRef, inView: navVisible } = useInView()
  return (
    
    <nav ref={navRef} className={navVisible?"navAnimation":""}>
      <Link to="home"       spy={true}><FaHome/></Link>
      <Link to="about"      spy={true} offset={window.innerWidth > 800 ? -100 : 0}><FaUserAlt/></Link>
      <Link to="experience" spy={true}><MdComputer/></Link>
      <Link to="portfolio"  spy={true} className="offset"><AiTwotoneCode/></Link>
      <Link to="contact"    spy={true} className="offset"><MdContactMail/></Link>
    </nav>
    
  )

}

export default Nav