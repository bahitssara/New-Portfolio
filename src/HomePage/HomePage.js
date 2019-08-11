import React from 'react';
import './HomePage.css'
import mainImg from './contact-copy-2.png'
import compImg from './comp-img.jpeg'


export default function HomePage () {
  return (
    <section className='headline headline-mobile'>
      <div className='container'>
          <h2 className='main-page'>Thanks for coming! Sara here.</h2>
          <img className='main-image-2' src={mainImg} alt='lights header' />
          <img className='main-image-comp' src={compImg} alt='comp main' />
          <h3>A lively Web Developer from Denver!</h3>
          <p className='inside-img'> I pride myself on my innate attention to detail and sponge like qualities. When I’m not coding, I’m cuddling up with cats, binge watching super hero shows, or going to concerts. Look forward to connecting with you!</p>
      </div>
    </section>
  )
}
