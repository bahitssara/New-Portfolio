import React from 'react';
import './Contact.css';
import contactImg from './union-station.jpg'

export default function Contact() {
    return(
        <section className='contact-page'>
            <h2 className='contact-text'>Contact Me</h2>
                <div className='contact-div'>
                    <p className='contact'>Always looking for work, or a good chat!</p>
                    <img className='contact-img' src={contactImg} alt='girl-with-code'/>
                </div>
        </section>
    )
}