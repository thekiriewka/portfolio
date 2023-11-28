import React from 'react'
import style from './Content.module.css'

const Content = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.title}>Frontend stack</div>
            <div className={style.sub_title}>HTML, CSS, Javascript, ReactJS.</div>
            <div className={style.second_title}>Constantly updated...</div>
            <div className={style.bottom_title}>Page created on React</div>
        </div>
    </div>
  )
}

export default Content;