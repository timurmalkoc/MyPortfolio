import React from 'react'
import { useInView } from 'react-intersection-observer'
import './header.css'
import Buttons from './Buttons'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  const { ref:hiRef, inView: hiVisible } = useInView()
  const { ref:cubeRef, inView: cubeVisible } = useInView()

  return (
    <header id='home'>
      <div className="container header__container">
      <div ref={hiRef} className={`hi ${hiVisible? "hiAnimate":""}`}>Hi There</div>
      <div className='name'>I'm Timur Celik</div>
      <div className='job__title'>
        <div className='job__container left'></div>
        <div className='job__container rigth'>
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