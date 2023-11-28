import React from 'react'
import style from './Contacts.module.css'

const contacts = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_row}>
        <div className={style.title}>
          <h1>Contacts</h1>
        </div>
        <div className={style.location}>
          <h2>Location</h2>
          <p><span>Tyumen, Russia</span></p>
        </div>
        <div className={style.feedback}>
          <h2>Telegram / WhatsApp</h2>
          <a href="tel:+79324858761">+7 (932) 48-58-761</a>
        </div>
        <div className={style.email}>
          <h2>Email</h2>
          <a href="mailto:kiriewka94@yandex.ru">kiriewka94@yandex.ru</a>
        </div>
      </div>
    </div>
  )
}

export default contacts