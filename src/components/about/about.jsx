import React from 'react';
import './about.css';
import ME from '../../assets/Damson_about.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt='About me'/>
          </div>
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Hi, I'm Ogundele Yusuf, a dedicated web developer specializing in HTML, CSS, and JavaScript. With a focus on React.js, Firebase, and a flair for design using Sass, Tailwind CSS, and Bootstrap, I bring a blend of creativity and technical expertise to every project. Let's collaborate and turn your ideas into exceptional digital experiences.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;