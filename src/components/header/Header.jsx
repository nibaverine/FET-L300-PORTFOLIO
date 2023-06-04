import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.png'
import Headersocilas from './Headersocilas'


function Header() {

  return (
    <header id='home'>
      <div className="particles-container">
      
         </div>
      <div  className='container header__container particles-overlay'>
      <h5>Hello i'm
      </h5>
      <h1>Niba Verine</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <Headersocilas/>
      <div className='me'>
       
        <img src={Me} alt='my immage' ></img>
      </div>
      <a href='#contact'className='scroll__down'>scroll Down</a>
      </div>
    </header>
  )
}

export default Header