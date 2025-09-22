import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: 'fa fa-phone', title: 'Call Us On', info: '+92 333 1234567' },
    { icon: 'fa fa-map-marker-alt', title: 'Office', info: 'Karachi, Pakistan' },
    { icon: 'fa fa-envelope', title: 'Email', info: 'info@gmail.com' },
    { icon: 'fa fa-globe', title: 'Website', info: 'www.domain.com' }
  ]

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row">
          {contactInfo.map((item, index) => (
            <div key={index} className="contact-info-item padd-15">
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
        <div className="row">
          <div className="contact-form padd-15">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name" 
                      required 
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      required 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea 
                      className="form-control" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message" 
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact