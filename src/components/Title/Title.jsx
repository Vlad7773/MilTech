import React from 'react'
import './title.css'
import { Link } from 'react-router-dom';

const Title = (props) => {
  return (
    <div id='title' className='title'>
      <img className='title__photo' src={props.photo} alt="ok" />
      {props.isHome ? (
        <div className='title__text'>
          <h2>Military Technologies</h2>
          <p>Зброя та Техніка:<br /> Від Концепції до Реальності</p>
          <Link to={'/tech'}>Дізнатися більше</Link>
        </div>
      ) : (
        <div style={{left: '50%', bottom: '-5vw', transform: 'translate( -50%, 0)'}} className='title__text'>
          <h2 style={{color: '#FFFFFF'}}>Military Technologies</h2>
          <p>ТЕХНІКА, що наближає нас до перемоги</p>
        </div>
      )}
    </div>
  )
};

export default Title
