import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <header role='banner' className='banner'>
          <h1><Link to='/'>Sara Mayberry </Link></h1>
          <nav role='navigation'>
              <ul className='nav-bar'>
                  <Link to='/projects'>Portfolio </Link>
                  <Link to='/about-me'>About Me</Link>
                  <Link to='/contact'>Contact</Link>
              </ul>
          </nav>
      </header>
    );
  }
}
 
export default Header;
