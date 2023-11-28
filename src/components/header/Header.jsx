import React from 'react'
import style from './Header.module.css'

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_row}>
        <div className={style.high}>Hi, my name is <span>Evgene.</span></div>
        <div className={style.second}>I'm a frontend developer</div>
        <div className={style.bottom}>based in Tyumen</div>
      </div>
    </div>
  )
}

export default Header;