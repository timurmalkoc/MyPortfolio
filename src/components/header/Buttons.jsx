import React from 'react'
import CV from '../../media/cv.pdf'
import { FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

const Buttons = () => {
  return (
    <div className="cta">
      <div className='download'>
        <motion.a href={CV} download className='btn' whileHover={{ scale:1.1 }} whileTab={{ scale:0.9 }}>Resume <FiDownload className='icon'/> </motion.a>
      </div>
    </div>
  )
}

export default Buttons