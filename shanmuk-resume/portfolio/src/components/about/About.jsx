import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To kNOW</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
                 <FaAward className='about__icon'/>
                 <h5>Achievements</h5>
                 <a href='https://drive.google.com/drive/folders/14p-EYWN2-MtBcDkzEs2FW8Ye3ARF1RR0?usp=drive_link'>Click Here</a>
                 <br/>
                 <small>4+</small>
          </article>
          <article className='about__card'>
                 <FiUsers className='about__icon'/>
                 <h5>Certificates</h5>
                 <a href='https://drive.google.com/drive/folders/1C109GPiuY2-XDuQiJSuxYBhc7bzfbN2O?usp=drive_link'>Click Here</a>
                 <br/>
                 <small>4+</small>
          </article>
          <article className='about__card'>
                 <VscFolderLibrary className='about__icon'/>
                 <h5>Projects</h5>
                 <a href='https://github.com/guest098'>Click Here</a>
                 <br/>
                 <small>10+ Projects</small>
          </article>
        </div>
        <p>
        Hello! I’m P. Shanmuk Reddy, currently pursuing my BTech in Artificial Intelligence and Machine Learning at CMR College of Engineering and Technology. I completed my intermediate studies at NRI Junior College and my schooling at St. Antony's English Medium High School. As a passionate MERN stack developer, I thrive on creating dynamic web applications and exploring innovative technologies, and I’m excited to apply my skills in the tech industry.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
      </section>
  )
}

export default About