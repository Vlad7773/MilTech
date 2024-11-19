import React from 'react'
import './footer.css'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import telegram from '../../images/telegram.png'
import telephone from '../../images/telephone.png'
import email from '../../images/email.png'

const Footer = (props) => {

  const handlerLinkClick = (e) => {
    if (props.isHome) {
      e.preventDefault();
      const id = e.target.getAttribute('href');
      const element = document.querySelector(id);
      console.log(element);
      const rect = element.getBoundingClientRect();
      console.log(rect);
      window.scrollTo({
        top: rect.top + window.pageYOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__title'>
            <h1>MILITARY TECHNOOGIES</h1>
            <div className='footer__icons'>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={telegram} alt="telegram" />
            </div>
          </div>
          <div className='footer__about'>
            <h1>ПРО НАС</h1>
            <hr />
            <p onClick={handlerLinkClick}><a href="#about">Про нашу команду</a></p>
            <p>Контакти</p>
          </div>
          <div className='footer__tech'>
            <h1>ТЕХНІКА</h1>
            <hr />
            <p>Безпілотники</p>
            <p>Авіація</p>
            <p>Важка техніка</p>
          </div>
          <div className='footer__donate'>
            <h1>ДОНАТ</h1>
            <hr />
            <p onClick={handlerLinkClick}><a href="#donate">Задонать!</a></p>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='footer__contacts'>
            <p>За додатковими питаннями звертайтеся :</p>
            <hr className='footer__hr' />
            <div className='contacts__text'>
              <img src={email} alt="mail" />
              <p>militaTECH@gmail.com</p>
            </div>
            <div className='contacts__text'>
              <img src={telephone} alt="phone" />
              <p>+380685954000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer
