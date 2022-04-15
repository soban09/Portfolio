import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/soban-farooq-0b8575209/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/soban09" target='_blank'><FaGithub/></a>
        <a href="https://www.codechef.com/users/soban007" target='_blank'><SiCodechef/></a>
    </div>
  )
}

export default HeaderSocials