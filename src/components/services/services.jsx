import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>Transform Figma or other web designs into pixel-perfect, responsive web interfaces.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Ensure websites are accessible to all users by implementing keyboard navigation and screen reader compatibility.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Craft intuitive and user-friendly interfaces to enhance the overall user experience.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Implement best practices for performance optimization, ensuring fast load times and smooth user interactions.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Ensure consistent and reliable performance across various browsers and devices.</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONTEND */}
        <article className="service">
          <div className="service_head">
            <h3>Backend Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icon' />
              <p>Implement Create, Read, Update, and Delete operations to manage and manipulate data effectively.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Develop secure user authentication systems with proper authorization controls.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Design and optimize database structures for efficient data storage and retrieval.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Implement security measures such as encryption and secure coding practices to protect against common vulnerabilities.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Create robust APIs to facilitate communication between the frontend and backend, enabling seamless data exchange.</p>
            </li>
          </ul>
        </article>
        {/* END OF BACKEND */}
      </div>
    </section>
  )
}

export default Services;