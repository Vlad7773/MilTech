import React from 'react'
import photo from '../../images/about-photo.jpg'
import './about.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about__title hidden'>
        <h1>ПРО НАС</h1>
      </div>
      <div className='about__container'>
        <div className='about__text hidden'>
          <p>Ми - команда фахівців, що захоплюються сучасною військовою технікою та зброєю нового покоління. Наша місія - розглядати та аналізувати останні досягнення в галузі військових технологій, щоб забезпечити вам доступ до найактуальнішої інформації. Незалежно від вашого зацікавлення в бойовій техніці, винищувачах чи інших аспектах військового обладнання, ми створили цей ресурс, щоб надати вам глибокі знання та відповісти на ваші запитання. Долучайтесь до нашої спільноти і разом ми дослідимо майбутнє військової техніки.</p>
        </div>
        <div className='about__photo hidden'>
          <img src={photo} alt="about" />
        </div>
      </div>
      <hr className='line' />
    </div>
  )
};

export default About
