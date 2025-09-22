import React from 'react'

const Services = () => {
  const services = [
    {
      icon: 'fa fa-laptop-code',
      title: 'Web Design',
      description: 'Creating beautiful and responsive web designs that provide excellent user experience across all devices.'
    },
    {
      icon: 'fa fa-code',
      title: 'Front-End Development',
      description: 'Building interactive and dynamic websites using modern technologies like React, HTML5, CSS3, and JavaScript.'
    },
    {
      icon: 'fa fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Ensuring your website looks perfect and functions flawlessly on desktop, tablet, and mobile devices.'
    }
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services