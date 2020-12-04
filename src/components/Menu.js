import React from "react";

import { Link, navigate } from 'gatsby';

const Menu = ({frontPage}) => {
  const oNasScroll = () => {
    if(frontPage) {
      if(typeof document !== 'undefined') {
        const oNasSection = document.querySelector("#num1");
        oNasSection.scrollIntoView({
          behavior: "smooth",
          top: 0,
          left: 0
        });
      }
    }
    else {
      navigate("/#onas");
    }
  }

  const kontaktScroll = () => {
    if(frontPage) {
      if(typeof document !== 'undefined') {
        const kontaktSection = document.querySelector("#kontakt");
        kontaktSection.scrollIntoView({
          behavior: "smooth",
          top: 0,
          left: 0
        });
      }
    }
    else {
      navigate("/#kontakt");
    }
  }

  return (<ul className="topMenuList horizontalList">
    <Link className="topLogo__link" to="/">
      <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
    </Link>
    <li className="topMenuList__item"><Link to="/">Home</Link></li>
    <li onClick={oNasScroll} className="topMenuList__item">O nas</li>
    <li className="topMenuList__item"><Link to="/oferta">Oferta</Link></li>
    <li className="topMenuList__item"><Link to="/portfolio">Portfolio</Link></li>
    <li onClick={kontaktScroll} className="topMenuList__item">Kontakt</li>
  </ul>)
};

export default Menu;