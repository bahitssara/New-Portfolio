import React from 'react';
import './AboutMe.css'
import catComp from './catcomp.jpg'

export default function AboutMe() {
    return(
        <section className='about-me'>
        <div className='about-me-div'>
            <h2>Why development is LIFE</h2>
                <p className='about-me-text'>
                I've spent the last year and a half soaking up all I can about development, and the tech industry. When I was 13, and Myspace was booming, I would spend hours combing through HTML templates, and building out my own custom profiles. If only I realized then, that you could create a career doing such things, my young adulthood would have been much less confusing! Luckily for me, I was able to take the dive into <strong>development LIFE</strong>! Now daily I get to plop down in front of my computer, and do what I love. There's never a day I don't learn something, and that is why <i>development is life</i>
                </p>
                <div className='imac-img'><img className='about-me-photo' src={catComp} alt='iMac g3' /></div>
                <p className='about-me-text'>When I'm not working on projects and learning new technology, I am either at a concert, cuddling up with my cat kids or enjoying the Rocky Mountains! </p>
            </div>
    </section>
    )
}