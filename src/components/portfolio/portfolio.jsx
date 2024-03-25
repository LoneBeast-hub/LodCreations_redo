import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/lod-corporate-site.jpg';
import IMG2 from '../../assets/lod-clothing.jpg';
import IMG3 from '../../assets/lod-transport.jpg';
import IMG4 from '../../assets/lod-lion-edge.jpg';
import IMG5 from '../../assets/shopify-dashboard.jpg';
import IMG6 from '../../assets/lodcreation.jpg';
import IMG7 from '../../assets/lod-sample-portfolio.jpg';
import IMG8 from '../../assets/dashboard-challenge.png';

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      imageUrl: IMG1,
      title: 'Lod Corporate Site',
      github: 'https://github.com/LoneBeast-hub/corporate_site.git',
      demo: 'https://lod-corporate-site.netlify.app'
    },
    {
      id: 2,
      imageUrl: IMG2,
      title: 'Lod Clothing',
      github: 'https://github.com/LoneBeast-hub/Lod_Clothing.git',
      demo: 'https://lod-clothing.netlify.app'
    },
    {
      id: 3,
      imageUrl: IMG3,
      title: 'Lod Transport',
      github: 'https://github.com/LoneBeast-hub/Lod_transport.git',
      demo: 'https://lodtransport.netlify.app/'
    },
    {
      id: 4,
      imageUrl: IMG4,
      title: 'Lod Lion Edge',
      github: 'https://github.com/LoneBeast-hub/lod-lion-enterprise.git',
      demo: 'https://pdsworld.netlify.apphttps://lod-lion-enterprise.netlify.app/'
    },
    {
      id: 5,
      imageUrl: IMG5,
      title: 'Shopify Dashboard clone',
      github: 'https://github.com/LoneBeast-hub/shopify-dashboard-challenge.git',
      demo: 'https://lod-shopify-admin.netlify.app/'
    },
    {
      id: 6,
      imageUrl: IMG6,
      title: 'Lod Creations',
      github: 'https://github.com/LoneBeast-hub/LodCreations_redo.git',
      demo: 'https://lodcreations.netlify.app'
    },
    {
      id: 7,
      imageUrl: IMG7,
      title: 'Lod Sample Portfolio',
      github: 'https://github.com/LoneBeast-hub/sample-portfolio.git',
      demo: 'https://lod-sample-portfolio.netlify.app/'
    },
    {
      id: 8,
      imageUrl: IMG8,
      title: 'Lod Dashboard Challenge',
      github: 'https://github.com/LoneBeast-hub/lod_dashboard_challenge.git',
      demo: 'https://lod-dashboard-challenge.netlify.app/'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          portfolioData.map(({id, imageUrl, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={imageUrl} alt="" />
                </div>
                <h3> {title} </h3>
                <div className="portfolio_item_cta">
                  <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;