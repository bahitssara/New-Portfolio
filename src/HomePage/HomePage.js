import React from 'react';
import './HomePage.css'
import mainImg from './contact-copy.png'

export default function HomePage () {
  return (
    <section className='headline headline-mobile'>
      <div className='container'>
          <h2 className='main-page'>Thanks for coming! Sara here.</h2>
          <h3>A lively Web Developer from Denver!</h3>
          <img className='main-image' src={mainImg} alt='lights header' />
          <p className='inside-img'> I pride myself on my innate attention to detail and sponge like qualities. When I’m not coding, I’m cuddling up with cats, binge watching super hero shows, or going to concerts. Look forward to connecting with you!</p>
      </div>
    </section>
  )
}
