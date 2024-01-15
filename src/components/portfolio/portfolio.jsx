import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const Portfolio = () => {
  const portfolioData = [
    {
      id: 1,
      imageUrl: IMG1,
      title: 'Lod Transport',
      github: 'https://github.com',
      demo: 'https://lodtransport.netlify.app'
    },
    {
      id: 2,
      imageUrl: IMG2,
      title: 'Lod Clothing',
      github: 'https://github.com',
      demo: 'https://lod-clothing.netlify.app'
    },
    {
      id: 3,
      imageUrl: IMG3,
      title: 'Ferra Store',
      github: 'https://github.com',
      demo: 'https://ferra-store.netlify.app'
    },
    {
      id: 4,
      imageUrl: IMG4,
      title: 'PDS World',
      github: 'https://github.com',
      demo: 'https://pdsworld.netlify.app'
    },
    {
      id: 5,
      imageUrl: IMG5,
      title: 'Wallet Name Generator',
      github: 'https://github.com',
      demo: 'https://walletnamegen.netlify.app'
    },
    {
      id: 6,
      imageUrl: IMG6,
      title: 'Lod Mint Sample',
      github: 'https://github.com',
      demo: 'https://lodmintsample.netlify.app'
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
                  <a href={github} className='btn'>Github</a>
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