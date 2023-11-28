import React from 'react'
// import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {

  // const activeLink = style.buttons_menu_link_active;
  // const normalLink = style.buttons_menu_link;

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="/" className={style.logo_portfolio}>Shadrin Evgene<span> portfolio</span></a>
        </div>
        <div className={style.buttons}>
          <div className={style.buttons_menu}>
            <a href="/" className={style.buttons_menu_link}>Home</a>
          </div>
          <div className={style.buttons_menu}>
            <a href="/projects" className={style.buttons_menu_link}>Projects</a>
          </div>
          <div className={style.buttons_menu}>
            <a href="/contacts" className={style.buttons_menu_link}>Contacts</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
