import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import LoadingSpinner from './components/LoadingSpinner'
import './styles/App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleSectionChange = (section) => {
    setActiveSection(section)
    setSidebarOpen(false) // Close sidebar on mobile after navigation
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="main-container">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="main-content">
        {activeSection === 'home' && <Home onNavigate={handleSectionChange} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  )
}

export default App