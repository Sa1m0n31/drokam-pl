import React, { useRef } from "react";

import { gsap } from "gsap/all";
import { Link } from 'gatsby';

const PageMobileMenu = () => {
  const menu = useRef(null);

  const exitMenu = () => {
    gsap.fromTo(menu.current, { x: 0 }, { x: -3000, duration: .5 });
  }

  return (<menu ref={menu} className="pageMobileMenu">
      <button className="exit" onClick={() => exitMenu()}>
        x
      </button>
      <ul className="pageMobileMenu__list">
        <li className="pageMobileMenu__item">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="pageMobileMenu__item">
          <Link to="/#onas">
            O nas
          </Link>
        </li>
        <li className="pageMobileMenu__item">
          <Link to="/oferta">
            Oferta
          </Link>
        </li>
        <li className="pageMobileMenu__item">
          <Link to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="pageMobileMenu__item">
          <Link to="/#kontakt">
            Kontakt
          </Link>
        </li>
      </ul>
  </menu>);
}

export default PageMobileMenu;