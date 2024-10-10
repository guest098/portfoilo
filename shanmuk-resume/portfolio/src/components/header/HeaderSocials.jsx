import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
              <a href='https://www.linkedin.com/in/shanmukreddy/' target='_blank'><BsLinkedin/></a>
              <a href='https://github.com/guest098' target='_blank'><FaGithub/></a>
              <a href='https://www.codechef.com/users/shannu78' target='_blank'><SiCodechef/></a>
              <a href='https://leetcode.com/u/guest0987/' target='_blank'><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials