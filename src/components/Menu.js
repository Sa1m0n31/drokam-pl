import React, { useState, useEffect } from "react";

import { Link, navigate } from 'gatsby';

const Menu = ({frontPage}) => {
  useEffect(() => {
    console.log = function() {};
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

  return (<div className="topMenuList horizontalList">
    <Link className="topLogo__link" to="/">
      <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
    </Link>
    <div className="topMenuList__item"><Link to="/">Home</Link></div>
    <div onClick={oNasScroll} className="topMenuList__item">O nas</div>
    <div className="topMenuList__item"><Link to="/oferta">Oferta</Link></div>
    <div className="topMenuList__item"><Link to="/portfolio">Portfolio</Link></div>
    <div onClick={kontaktScroll} className="topMenuList__item">Kontakt</div>
  </div>)
};

export default Menu;