import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import mainImg from './contact.jpg'
import MobileHeader from '../MobileHeader/MobileHeader';


class Header extends React.Component {
  render(){
    return (   
      <div className ='mobile'>
        <MobileHeader 
          pageWrapId={ 'page-wrap' }
          outerContainerId={ 'outer-container' }

        />
      <div className='sidebar'>
        <Link className='active' to='/'>Sara Mayberry</Link>
        <img className='main-image' src={mainImg} alt='lights header' />
        <Link to='/projects'>Portfolio </Link>
        <Link to='/about-me'>About Me</Link>
        <Link to='/contact'>Contact</Link>
        <ul className='contact-links'>
                <li><a href='mailto:saraamayberry@yahoo.com'><i className='fas fa-envelope'/></a></li>
                <li><a href='https://github.com/bahitssara' target='_blank' rel="noopener noreferrer"><i className='fab fa-github-square'/></a></li>
                <li><a href='https://www.linkedin.com/in/sara-mayberry-444800153/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'/></a></li>
        </ul>
      </div>
      </div>
    )
  }
}

 
export default Header;
