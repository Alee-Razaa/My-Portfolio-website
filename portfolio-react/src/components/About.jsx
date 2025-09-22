import React from 'react'

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>I'm Ali Raza Memon and <span>Front End Developer</span></h3>
                <p>
                  I'm a passionate front-end developer with experience in HTML, CSS, and JavaScript. 
                  I enjoy creating beautiful, responsive websites that provide excellent user experiences. 
                  Currently learning React.js to build modern, interactive web applications.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>Birthday: <span>Dec 1995</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Age: <span>28</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Website: <span>www.domain.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Email: <span>info@gmail.com</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Degree: <span>CS</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Phone: <span>+92 333 1234567</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>City: <span>Karachi</span></p>
                  </div>
                  <div className="info-item padd-15">
                    <p>Freelance: <span>Available</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About