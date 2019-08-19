import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import mainImg from './contact-copy-2.png'
import compImg from './comp-img2.jpg'


export default function HomePage () {
  return (
    <section className='headline headline-mobile' id='page-wrap'>
      <div className='container'>
          <h2 className='main-page'>Sara Mayberry</h2>
          <h3>Full Stack Web Developer</h3>
          <img className='main-image-2' src={mainImg} alt='lights header' />
          <img className='main-image-comp' src={compImg} alt='comp main' />
          <p className='inside-img'>Currently working with:</p>
            <i className='fab fa-html5' alt='html5'/>
            <i className='fab fa-js' alt='javascript'/>
            <i className='fab fa-react' alt='react'/>
            <i className='fab fa-node-js 'alt='nodejs'/>
            <i className='fab fa-css3-alt' />
            <p className='add-list-text'>And always adding to the list</p>
          <p>I spent the last year studying full stack web development, and pursuing my dream career. Software and the web isn't something that I've ever needed to force on myself. Having the opportunity to work with fellow developers and grow within the tech industry is now in my grasp and I've never felt more in my place!</p>
          <Link to='/projects'><button>Check out my work!</button></Link>
          
      </div>
    </section>
  )
}
