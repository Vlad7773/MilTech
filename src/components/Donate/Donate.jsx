import React from 'react'
import './donate.css'
import timerPhoto from '../../images/timer.jpg'

const Donate = () => {

  function getDataTime() {
    const now = new Date(); // Отримати поточну дату та час
    const targetDate = new Date("2022-02-24"); // Задайте дату, з якої ви хочете почати обчислення

    const diffMilliseconds = now - targetDate; // Різниця в мілісекундах
    const diffSeconds = Math.floor(diffMilliseconds / 1000); // Різниця в секундах
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60); // Різниця в годинах
    const maxDays = Math.floor(diffHours / 24); // Різниця в хвилинах
    const minutesInYear = 365 * 24 * 60; // Середня кількість хвилин в році
    const minutesInMonth = 30 * 24 * 60; // Середня кількість хвилин в місяці
    const minutesInDay = 24 * 60; // Кількість хвилин в дні

    const years = Math.floor(diffMinutes / minutesInYear);
    const months = Math.floor((diffMinutes % minutesInYear) / minutesInMonth);
    const days = Math.floor(((diffMinutes % minutesInYear) % minutesInMonth) / minutesInDay);
    const hours = Math.floor(((diffMinutes % minutesInYear) % minutesInMonth % minutesInDay) / 60);
    const remainingMinutes = diffMinutes % 60;

    return [years, months, days, hours, remainingMinutes, maxDays];
  }

  const dataTime = getDataTime();

  return (
    <div id='donate' className='donate'>
      <h1 className='donate__title hidden'>Донат</h1>
      <div className='donate__timer'>
        <div className='donate__image'>
          <img src={timerPhoto} alt="timer" />
          <div className='image__text'>
            <h1>{dataTime[5]}</h1>
            <p>{dataTime[5]} дні або {dataTime[0]} рік,{dataTime[1]} місяців,{dataTime[2]} днів,{dataTime[3]} годин,{dataTime[4]} хвилин від початку повномаштабного вторгнення росії в Україну</p>
          </div>
        </div>
      </div>
      <div className='donate__payment'>
        <div className='payment__title hidden'>
          <h1>ДОНАТЬТЕ ЩОБ ПЕРЕМОГА УКРАЇНИ СТАЛА БЛИЩОЮ</h1>
          <div className='payment__discribe'>
            <p>Кожен донат допомагає зупинити війну, наближає Україну</p>
            <p>до миру та допомагає людям повернутися додому</p>
          </div>
        </div>
        <div className='payment_btns'>
          <button className='hidden'>Донать в один клік</button>
          <button className='hidden'>За реквізитами</button>
          <button className='hidden'>Crypto</button>
        </div>
      </div>
      <div className='donate__info'>
        <div className='info__unit hidden'>
          <div className='unit__circle'>
            <div className='circle'></div>
            <p className='circle__text'>93 + млн грн</p>
          </div>
          <p className='unit__text'>Вже зібрано</p>
        </div>
        <div className='info__unit hidden'>
          <div className='unit__circle'>
            <div className='circle'></div>
            <p className='circle__text'>2100+</p>
          </div>
          <p className='unit__text'>Донаторів</p>
        </div>
        <div className='info__unit hidden'>
          <div className='unit__circle'>
            <div className='circle'></div>
            <p className='circle__text'>150k + грн</p>
          </div>
          <p className='unit__text'>Щодня</p>
        </div>
      </div>
    </div>
  )
};

export default Donate
