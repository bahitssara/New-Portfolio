import React from 'react';
import './Header.css'

class Header extends React.Component {
  render(){
    return (
      <header role="banner" className="banner">
          <h1><a href="index.html">Sara Mayberry</a></h1>
          <nav role="navigation">
              <ul className="nav-bar">
                  <li id="projects-link"><a href="projects.html">Portfolio</a></li>
                  <li id="aboutme-link"><a href="aboutme.html">About Me</a></li>
                  <li id="contact-link"><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
