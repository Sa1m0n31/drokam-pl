import React from "react";

import { Link, navigate } from 'gatsby';

const PageMenu = ({frontPage}) => {
  const oNasScroll = () => {
    if(frontPage) {
      if(typeof document !== 'undefined') {
        const oNasSection = document.querySelector(".aboutUsSection");
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
    <li className="topMenuList__item"><Link to="/">Home</Link></li>
    <li onClick={oNasScroll} className="topMenuList__item">O nas</li>
    <li className="topMenuList__item"><Link to="/oferta">Oferta</Link></li>
    <li className="topMenuList__item"><Link to="/portfolio">Portfolio</Link></li>
    <li onClick={kontaktScroll} className="topMenuList__item">Kontakt</li>
  </ul>)
};

export default PageMenu;