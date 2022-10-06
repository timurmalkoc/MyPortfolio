import React from 'react'
import CV from '../../media/cv.pdf'
import { FiDownload } from 'react-icons/fi'

const Buttons = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Resume <FiDownload className='icon'/> </a>
    </div>
  )
}

export default Buttons