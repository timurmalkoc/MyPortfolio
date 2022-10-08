import React from 'react'
import './footer.css'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

function Footer() {
 return (
    <footer id='footer'>
      <p className='footer__name'><b>Timur Celik</b></p>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contatc">Contact</a></li>        
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/timurcelik/" target="_blank"><FaLinkedinIn/></a>
        <a href="https://github.com/timurmalkoc" target="_blank"><FiGithub/></a>
        <a href="https://www.pinterest.com/MalkocTimurCelik/" target="_blank"><FaPinterestP/></a>
      </div>
    </footer>
  )
}


export default Footer