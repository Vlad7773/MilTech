import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './news.css'; // Якщо потрібно

import news1 from '../../images/news1.jpg';
import news2 from '../../images/news2.jpg';
import news3 from '../../images/news3.jpg';
import Carousel from 'react-spring-3d-carousel';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      key: uuidv4(),
      content: (<div style={{ position: 'relative', width: '50vw', height: 'auto' }}>

        <img src={news1} alt="1" style={{ borderRadius: '.8vw', transition: 'all .4s ease', border: '1px solid #ccc', filter: currentSlide === 0 ? 'none' : 'blur(5px)', width: '100%', height: '100%', objectFit: 'cover' }} />

        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30%', backgroundColor: 'rgb(255,255,255,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '8px' }} className="text-overlay">
          <h2 style={{ color: 'white', fontSize: '1.25vw', fontFamily: 'days', fontWeight: '400', padding: '0 0 0 1.5vw' }}>Україна отримала 40 французьких бронемашин AMX-10RC</h2>
          <p style={{ color: 'white', textAlign: 'left', padding: '2vw 1vw 1vw 1.5vw', fontFamily: 'comfortaa', fontSize: '1.2vw' }}>За даними аналітиків, AMX-10RC вже використовувались Україною під час літнього контрнаступу і брали участь у бойових діях на передовій. Однак тоді ЗСУ ... <a href="#">Детальна інформація</a></p>
        </div>
      </div>),
    },
    {
      key: uuidv4(),
      content: (<div style={{ position: 'relative', width: '50vw', height: 'auto' }}>

        <img src={news2} alt="2" style={{ borderRadius: '.8vw', transition: 'all .4s ease', border: '1px solid #ccc', filter: currentSlide === 1 ? 'none' : 'blur(5px)', width: '100%', height: '100%', objectFit: 'cover' }} />

        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30%', backgroundColor: 'rgb(255,255,255,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '8px' }} className="text-overlay">
          <h2 style={{ color: 'white', fontSize: '1.25vw', fontFamily: 'days', fontWeight: '400', padding: '0 0 0 1.5vw' }}>Україна отримала 40 французьких бронемашин AMX-10RC</h2>
          <p style={{ color: 'white', textAlign: 'left', padding: '2vw 1vw 1vw 1.5vw', fontFamily: 'comfortaa', fontSize: '1.2vw' }}>За даними аналітиків, AMX-10RC вже використовувались Україною під час літнього контрнаступу і брали участь у бойових діях на передовій. Однак тоді ЗСУ ... <a href="#">Детальна інформація</a></p>
        </div>
      </div>),
    },
    {
      key: uuidv4(),
      content: (<div style={{ position: 'relative', width: '50vw', height: 'auto' }}>

        <img src={news3} alt="3" style={{ borderRadius: '.8vw', transition: 'all .4s ease', border: '1px solid #ccc', filter: currentSlide === 2 ? 'none' : 'blur(5px)', width: '100%', height: '100%', objectFit: 'cover' }} />

        <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '30%', backgroundColor: 'rgb(255,255,255,0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: '8px' }} className="text-overlay">
          <h2 style={{ color: 'white', fontSize: '1.25vw', fontFamily: 'days', fontWeight: '400', padding: '0 0 0 1.5vw' }}>Україна отримала 40 французьких бронемашин AMX-10RC</h2>
          <p style={{ color: 'white', textAlign: 'left', padding: '2vw 1vw 1vw 1.5vw', fontFamily: 'comfortaa', fontSize: '1.2vw' }}>За даними аналітиків, AMX-10RC вже використовувались Україною під час літнього контрнаступу і брали участь у бойових діях на передовій. Однак тоді ЗСУ ... <a href="#">Детальна інформація</a></p>
        </div>
      </div>),
    },
  ];

  const onNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const onPrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div id='news' className='news'>
      <h1 className='news__title hidden'>Новини</h1>
      <div className="news__slider">
        <div className="news__container">
          <button onClick={onPrev}><ArrowLeft /></button>
          <Carousel slides={slides} goToSlide={currentSlide} showNavigation={false} />
          <button onClick={onNext}><ArrowRight /></button>
        </div>
      </div>
      <hr className='line' />
    </div>
  );
};

export default News;
