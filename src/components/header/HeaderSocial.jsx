import React from 'react'
import { FaLinkedin, FaGithubSquare, FaPinterestSquare } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/timurcelik/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/timurmalkoc" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.pinterest.com/MalkocTimurCelik/" target="_blank"><FaPinterestSquare/></a>

    </div>
  )
}

export default HeaderSocial