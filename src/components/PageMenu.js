import React, { useEffect, useRef } from "react";

import { Link, navigate } from 'gatsby';

const PageMenu = ({frontPage, mark}) => {
  const oferta = useRef(null);
  const portfolio = useRef(null);

  useEffect(() => {
      console.log = function() {};
      if(mark === 1) {
        oferta.current.style.opacity = 1;
        portfolio.current.style.opacity = 0;
      }
      else if(mark === 2) {
        oferta.current.style.opacity = 0;
        portfolio.current.style.opacity = 1;
      }
  }, []);

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
      navigate("/#num1");
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
    <li id="oferta" className="topMenuList__item">
      <span className="mark" ref={oferta}/>
      <Link to="/oferta">Oferta</Link>
    </li>
    <li id="portfolio" className="topMenuList__item">
      <span className="mark" ref={portfolio}/>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li onClick={kontaktScroll} className="topMenuList__item">Kontakt</li>
  </ul>)
};

export default PageMenu;