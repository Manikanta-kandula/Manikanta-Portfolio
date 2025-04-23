import React from 'react';
import ManikantaImage from '../assets/Manikanta.jpeg';

function Header() {
  return (
    <header>

      <div className="container">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-item"><a href="#skills">Skills</a></li>
          <li className="nav-item"><a href="#experience">Experience</a></li>
          <li className="nav-item"><a href="#education">Education</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        <h1>👋 Hello, I'm <span>Manikanta Reddy Kandula</span></h1>
        
        <img 
          src={ManikantaImage} 
          alt="Manikanta Reddy Kandula" 
          className="profile-img" 
        />

        <p>
          I'm a Systems Project Consultant based in Tallahassee, FL. I specialize in building scalable and
          user-friendly web applications using modern technologies.
        </p>
        <div className="links">
  <a href="https://github.com/Manikanta-kandula" target="_blank" rel="noopener noreferrer" className="github">
    <span className="icon">
      <i className="fab fa-github"></i> 
    </span>
    GitHub
  </a>
  <a href="https://www.linkedin.com/in/manikanta-kandula/" target="_blank" rel="noopener noreferrer" className="linkedin">
    <span className="icon">
      <i className="fab fa-linkedin-in"></i> 
    </span>
    LinkedIn
  </a>
</div>

      </div>
    </header>
  );
}

export default Header;
