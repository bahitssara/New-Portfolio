import React from 'react';
import './Contact.css';

export default function Contact() {
    return(
        <section className='contact-page'>
            <h2 className='contact-text'>Contact Me</h2>
                <div className='contact-div'>
                <p className='contact'>Always looking for work, or coffee chats! Let's connect</p>
                    <ul className='contact-links-main'>
                        <li><a href='mailto:saraamayberry@yahoo.com'><i className='fas fa-envelope'/></a><p className='email-text'>Have any questions? Email me! Likely the quickest way to get in touch.</p></li>
                        <li><a href='https://github.com/bahitssara' target='_blank' rel="noopener noreferrer"><i className='fab fa-github-square'/></a><p className='github-text'>If you're curious about apps I'm working on, definitely check out my github! You can find any of my posted apps as well as any side projects that may not be listed!</p></li>
                        <li><a href='https://www.linkedin.com/in/sara-mayberry-444800153/' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'/></a><p className='linkedin-text'>Add me on LinkedIn! Always up for new connections and networking.</p></li>
                    </ul>
                </div>
        </section>
    )
}