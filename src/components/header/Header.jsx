import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpeg'
import Headersocilas from './Headersocilas'


function Header() {

  return (
    <header id='home'>
      <div className="particles-container">
      
         </div>
      <div  className='container header__container particles-overlay'>
      <h5>hello i'm
      </h5>
      <h1>VERINE</h1>
      <h5 className='text-light'>NETWORKING ENGINEER</h5>
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