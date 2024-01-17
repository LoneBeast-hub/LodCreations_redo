import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/yusuf-oyindamola-b389131bb/' target="_blank" rel='noreferrer'>
            <BsLinkedin />
        </a>
        <a href='https://github.com/LoneBeast-hub' target="_blank" rel='noreferrer'>
            <FaGithub />
        </a>
        <a href='https://www.upwork.com/freelancers/~01e9c35dcbdd3f33c2?viewMode=1' target="_blank" rel='noreferrer'>
            <SiUpwork />
        </a>
    </div>
  )
}

export default HeaderSocials;