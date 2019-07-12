import React from 'react';
import './Footer.css'

export default function Footer() {
    return(
        <div className='footer'>
            <ul className='footer-links'>
                <li><a href='mailto:saraamayberry@yahoo.com'><i className='fas fa-envelope'/></a></li>
                <li><a href='https://github.com/bahitssara' target='_blank' rel="noopener noreferrer"><i className='fab fa-github-square'/></a></li>
                <li><a href='https://www.linkedin.com/in/sara-mayberry-444800153/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'/></a></li>
            </ul>
        </div>
    )
}