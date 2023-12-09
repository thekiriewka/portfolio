import React from 'react'
import style from './Main.module.css'
import Content from '../../content/Content'
import Header from '../../header/Header'

const Main = () => {
  return (
    <div id='Main' className={style.wrapper}>
      <div className={style.wrapper_row}>
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default Main;
