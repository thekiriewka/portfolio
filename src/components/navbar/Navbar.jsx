import React from 'react';
import style from './Navbar.module.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToElement = (elementId) => {
    scroll.scrollTo(elementId, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <div className={style.logo_portfolio}>
            Shadrin Evgene<span> portfolio</span>
          </div>
        </div>
        <div className={style.buttons}>
          <div className={style.buttons_menu} onClick={() => scrollToElement('Main')}>
            <Link to="Main" smooth={true} duration={500} className={style.buttons_menu_link}>
              Home
            </Link>
          </div>
          <div className={style.buttons_menu} onClick={() => scrollToElement('Projects')}>
            <Link to="Projects" smooth={true} duration={500} className={style.buttons_menu_link}>
              Projects
            </Link>
          </div>
          <div className={style.buttons_menu} onClick={() => scrollToElement('Contacts')}>
            <Link to="Contacts" smooth={true} duration={500} className={style.buttons_menu_link}>
              Contacts
            </Link>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Navbar;