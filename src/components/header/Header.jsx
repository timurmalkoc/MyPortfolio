import React from 'react'
import './header.css'
import Buttons from './Buttons'
import HeaderSocial from './HeaderSocial'
import Typical from 'react-typical'

const Header = () => {


  const titles = ["Fullstack Developer",2000, "Software Test Engineer", 2000, "Husband & Father", 2000, "Artist", 1000]


  return (
    <header id='home'>
      <div className="container header__container">
      <div className='hi'>Hi There</div>
      <div className='name'>I'm Timur Celik</div>
      <div className='job__title'>
        <div className='job__container left'>I'm a</div>
        <div className='job__container rigth'>
          <Typical loop={Infinity} wrapper='b' steps={titles}/> </div>
      </div>
      <Buttons/>
      <HeaderSocial/>


      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header