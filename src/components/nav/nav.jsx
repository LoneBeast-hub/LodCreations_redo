import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => {
        setActiveNav('#')
      }} className={activeNav === '#'? 'active' : ''} rel='noreferrer'>
        <AiOutlineHome />
      </a>
      <a href='#about' onClick={() => {
        setActiveNav('#about')
      }} className={activeNav === '#about'? 'active' : ''} rel='noreferrer'>
        <AiOutlineUser />
      </a>
      <a href='#experience' onClick={() => {
        setActiveNav('#experience')
      }} className={activeNav === '#experience'? 'active' : ''} rel='noreferrer'>
        <BiBook />
      </a>
      <a href='#services' onClick={() => {
        setActiveNav('#services')
      }} className={activeNav === '#services'? 'active' : ''} rel='noreferrer'>
        <RiServiceLine />
      </a>
      <a href='#contact' onClick={() => {
        setActiveNav('#contact')
      }} className={activeNav === '#contact'? 'active' : ''} rel='noreferrer'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav;