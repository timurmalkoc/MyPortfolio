import React from 'react'
import './header.css'
import Buttons from './Buttons'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Timur Celik</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <Buttons/>
      <HeaderSocial/>


      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header