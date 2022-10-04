import React from 'react'
import CV from '../../media/cv.pdf'

const Buttons = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>My CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Buttons