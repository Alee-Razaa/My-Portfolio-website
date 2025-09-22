import React from 'react'

const Portfolio = () => {
  const portfolioItems = [
    { id: 1, image: '/assets/img/portfolio-1.jpg', title: 'Project 1', category: 'Web Design' },
    { id: 2, image: '/assets/img/portfolio-2.jpg', title: 'Project 2', category: 'Web Development' },
    { id: 3, image: '/assets/img/portfolio-3.jpg', title: 'Project 3', category: 'React App' },
    { id: 4, image: '/assets/img/portfolio-4.jpg', title: 'Project 4', category: 'Frontend' },
    { id: 5, image: '/assets/img/portfolio-5.jpg', title: 'Project 5', category: 'UI/UX' },
    { id: 6, image: '/assets/img/portfolio-6.jpg', title: 'Project 6', category: 'Web App' }
  ]

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map(item => (
            <div key={item.id} className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio