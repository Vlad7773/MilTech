import React from 'react'
import './header.css'
import user from '../../images/user.png';
import phone from '../../images/telephone.png';
import menu from '../../images/more.png';
import { Link } from 'react-router-dom';

const Header = ({isHome = false}) => {

  const handlerLinkClick = (e) => {
    e.preventDefault();
    if (isHome) {      
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
    <header className='header'>
      <div className='header__container'>
        <div className='header__firstrow'>
          <div className='header__title'><Link to={'/'}>Military</Link></div>
          <div className='header__navigation'>
            <ul>
              <li onClick={handlerLinkClick}><a href="#about">Про нас</a></li>
              <li onClick={handlerLinkClick}><a href="#tech">Техніка</a></li>
              <li onClick={handlerLinkClick}><a href="#news">Новини</a></li>
              <li onClick={handlerLinkClick}><a href="#donate">Донат</a></li>
            </ul>
            <div className='header__icons'>
              <img src={user} alt="user" />
              <img src={phone} alt="phone" />
              <img src={menu} alt="menu" />
            </div>
          </div>
        </div>
        <hr />
        <div className='header__secondrow'>
          <div className='header__title'><Link to={'/'}>Technologies</Link></div>
        </div>
      </div>
    </header>
  )
};

export default Header
