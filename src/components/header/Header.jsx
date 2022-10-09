import React, { useRef, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './header.css'
import Buttons from './Buttons'
import HeaderSocial from './HeaderSocial'
import Typical from 'react-typical'


const Header = () => {
  const { ref:hiRef, inView: hiVisible } = useInView()
  const { ref:cubeRef, inView: cubeVisible } = useInView()

  const titles = ["Fullstack Developer",2000, "Software Test Engineer", 2000, "Husband & Father", 2000, "Artist", 1000]


  return (
    <header id='home'>
      <div className="container header__container">
      <div ref={hiRef} className={`hi ${hiVisible? "hiAnimate":""}`}>Hi There</div>
      <div className='name'>I'm Timur Celik</div>
      <div className='job__title'>
        <div className='job__container left'>I'm a</div>
        <div className='job__container rigth'>
          {/* <Typical loop={Infinity} wrapper='b' steps={titles}/>  */}
          <div ref={cubeRef} class="scene ">
            <div class={`box ${cubeVisible? "cubeAnimate":"show-front"}`}>
              <div class="box__face box__face--front">Fullstack Developer</div>
              <div class="box__face box__face--back">Software Test Engineer</div>
              <div class="box__face box__face--right">Husband & Father</div>
              <div class="box__face box__face--left">Artist</div>
            </div>
          </div>

        </div>
      </div>

        <Buttons/>

      <HeaderSocial/>


      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header