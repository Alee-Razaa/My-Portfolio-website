import React from 'react'

const Sidebar = ({ activeSection, setActiveSection, isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 'home', icon: 'fa fa-home', label: 'Home' },
    { id: 'about', icon: 'fa fa-user', label: 'About' },
    { id: 'services', icon: 'fa fa-list', label: 'Services' },
    { id: 'portfolio', icon: 'fa fa-briefcase', label: 'Portfolio' },
    { id: 'contact', icon: 'fa fa-comments', label: 'Contact' }
  ]

  return (
    <>
      <div className={`aside ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <a href="#"><span>A.</span>R</a>
        </div>
        <div className="nav-toggler" onClick={toggleSidebar}>
          <span></span>  
        </div>
        <ul className="nav">
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href="#" 
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveSection(item.id)
                }}
              >
                <i className={item.icon}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  )
}

export default Sidebar