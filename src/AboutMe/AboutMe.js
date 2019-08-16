import React from 'react';
import './AboutMe.css'
import iMacImg from './iMacG3.jpg'

export default function AboutMe() {
    return(
        <section className='about-me'>
        <div className='about-me-div'>
            <h2>Why web development?</h2>
                <p className='about-me-text'>I've spent the last year preparing for my career in Software Development, and am a recent graduate of the Full Stack Software Development program with Thinkful! I have built multiple in depth projects using JavaScript, jQuery, React.js, Node.js and PostgreSQL. Prior to software development I have a background in customer service, and people management, and I am ready to combine my work experience to grow within the tech industry! 
                </p>
                <div className='imac-img'><img className='about-me-photo' src={iMacImg} alt='iMac g3' /></div>
                <p className='about-me-text'>When I'm not working on projects and learning new technology, I am either at a concert, cuddling up with my cat kids or enjoying the Rocky Mountains. </p>
            </div>
    </section>
    )
}