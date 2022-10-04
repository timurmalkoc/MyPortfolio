import React from 'react'
import './header.css'
import Buttons from './Buttons'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Timur Celik</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <Buttons/>
      </div>
    </header>
  )
}

export default Header