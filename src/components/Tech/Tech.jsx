import React from 'react'
import './tech.css'
import photo1 from '../../images/main-drone.jpg'
import photo2 from '../../images/main-aer.jpg'
import photo3 from '../../images/main-tech.png'
import { Link } from 'react-router-dom'

const Tech = () => {
  return (
    <div id='tech' className='tech'>
      <div className='tech__title hidden'>
        <h1>Техніка</h1>
      </div>
      <div className='tech__container'>
        <div className='tech__photos'>
          <div className='tech__photo hidden'>
            <img src={photo1} alt="photo1" />
            <h3>Безпілотники</h3>
          </div>
          <div className='tech__photo hidden'>
            <img src={photo2} alt="photo2" />
            <h3>Авіація</h3>
          </div>
          <div className='tech__photo hidden'>
            <img src={photo3} alt="photo3" />
            <h3>Важка техніка</h3>
          </div>
        </div>
        <div className='tech__btn'>
          <Link to={'/tech'}>Детальніше</Link>
        </div>
      </div>
      <hr />
    </div>
  )
};

export default Tech
