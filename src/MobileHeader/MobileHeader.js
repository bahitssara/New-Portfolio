import React from 'react';
import { Link } from 'react-router-dom';
import './MobileHeader.css'
import { fallDown as Menu } from 'react-burger-menu';

function MobileHeader() {
  return (
    // Pass on our props
    <Menu 
        customBurgerIcon={<i className='fa fa-bars'/>}
        pageWrapId={ 'page-wrap' }
        outerContainerId={ 'outer-container' }
        width={150}
        className='burger-menu'
        noOverlay
    >
      <div className='sidebar-mobile'>
        <Link className='active' to='/'>Sara Mayberry</Link>
        <Link to='/projects'>Portfolio </Link>
        <Link to='/about-me'>About Me</Link>
        <Link to='/contact'>Contact</Link>
        <ul className='contact-links'>
                <li><a href='mailto:saraamayberry@yahoo.com'><i className='fas fa-envelope'/></a></li>
                <li><a href='https://github.com/bahitssara' target='_blank' rel="noopener noreferrer"><i className='fab fa-github-square'/></a></li>
                <li><a href='https://www.linkedin.com/in/sara-mayberry-444800153/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'/></a></li>
            </ul>
      </div>
    </Menu>
  );
};

export default MobileHeader;