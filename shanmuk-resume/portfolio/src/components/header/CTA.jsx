import React from 'react'
import Shanmuk from '../../assets/updated-resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={Shanmuk} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA