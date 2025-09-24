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
      <aside className={`aside ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="logo">
          <a href="#" aria-label="Ali Raza portfolio homepage"><span>A.</span>R</a>
        </div>
        <button 
          className="nav-toggler" 
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <span></span>  
        </button>
        <nav>
          <ul className="nav" role="menubar">
            {navItems.map(item => (
              <li key={item.id} role="none">
                <a 
                  href="#" 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveSection(item.id)
                  }}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  <i className={item.icon} aria-hidden="true"></i> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}

export default Sidebar