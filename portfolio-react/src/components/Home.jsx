import React from 'react'
import { useTypingAnimation } from '../hooks/useTypingAnimation'

const Home = () => {
  const typingTexts = ['front-end developer', 'web designer', 'React developer']
  const typedText = useTypingAnimation(typingTexts)

  return (
    <section className="home-section">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">Hi, Myself <span className="name">Ali Raza Memon</span></h3>              
            <h3 className="my-profession">I'm a <span className="typing">{typedText}</span></h3>
            <p>I'm a front-end developer with more than 1 month experiance in practicing web Html, 
              CSS and now I have given this task by my teacher to create a portfolio website...</p>
            <a href="#contact" className="btn hire-me">Hire Me</a>
          </div>
          <div className="home-img padd-15">
            <img id="profile" src="/assets/img/hire me1.png" alt="Ali Raza Memon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home