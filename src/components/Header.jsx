import React from "react";

const Header = () => (
  <header className="navbar">
    <div className="navbar__logo" style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1 }}>Shivaraj Manikashetti</div>
    <nav className="navbar__links" style={{ display: 'flex', gap: '2.5rem', fontWeight: 500 }}>
      <a href="#home">Home</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contacts</a>
    </nav>
  </header>
);

export default Header; 