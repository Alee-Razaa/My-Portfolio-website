import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Thank you for your message! I will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setErrors({})
    } catch (error) {
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                      className={`form-control ${errors.name ? 'error' : ''}`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name" 
                      required 
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'error' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email" 
                      required 
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input 
                      type="text" 
                      className={`form-control ${errors.subject ? 'error' : ''}`}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject" 
                      required 
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea 
                      className={`form-control ${errors.message ? 'error' : ''}`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message" 
                      required
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button 
                    type="submit" 
                    className="btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
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