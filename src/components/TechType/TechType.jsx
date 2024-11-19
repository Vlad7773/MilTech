import React, { useState } from 'react'
import './techType.css'
import { Link } from 'react-router-dom';

const TechType = ({ photo = '', type = '', data = null }) => {

  const [isInfo, setIsInfo] = useState(false);

  function handleClickType(e) {
    e.preventDefault();
    const el = document.querySelectorAll('.tech__type');

    for (let i = 0; i < el.length; i++) {
      if (el[i].outerText !== data.type) {
        el[i].style.display = 'none';
      }
    }
    setIsInfo(true);

  }


  return (<>
    <div className='tech__type'>
      <div className='type__photo hidden'>
        <img src={photo} onClick={handleClickType} alt="type" />
        <h1 onClick={handleClickType}>{type}</h1>
      </div>
    </div >
    {isInfo ? (
      <>
      <div className='tech__info'>
        <div className='info__container'>
          <div className='info__left'>
            <img src={data.images[0]} alt="" />
          </div>
          <div className='info__right'>
            <p>{data.texts[0]}</p>
            <button>Детальніше</button>
          </div>
        </div>
      </div >
      <div className='tech__info'>
        <div className='info__container'>          
          <div className='info__right'>
            <p>{data.texts[1]}</p>
            <button>Детальніше</button>
          </div>
          <div className='info__left'>
            <img src={data.images[1]} alt="" />
          </div>
        </div>
      </div >
      <div className='tech__info'>
        <div className='info__container'>
          <div className='info__left'>
            <img src={data.images[2]} alt="" />
          </div>
          <div className='info__right'>
            <p>{data.texts[2]}</p>
            <button>Детальніше</button>
          </div>
        </div>
      </div >
      <div className='info__btns '>
        <Link to={'/'}>ПОВЕРНУТИСЯ НА ГОЛОВНУ</Link>
        <button onClick={() => window.location.reload()}>НАЗАД</button>
      </div>
      </>
    ) : (
      <></>
    )}
  </>
  )
};

export default TechType
