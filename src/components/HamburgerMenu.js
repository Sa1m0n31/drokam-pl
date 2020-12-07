import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby"

import { gsap } from 'gsap/all';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const list = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);
  const hamburgerMenu = useRef(null);

  const oNasScroll = () => {
    if (typeof document !== 'undefined') {
      const oNasSection = document.querySelector("#num1");
      oNasSection.scrollIntoView({
        behavior: "smooth",
        top: 0,
        left: 0
      });
    }
    gsap.set(list.current, { height: 0 });
    gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current], { visibility: 'hidden', display: "none" });
    setOpen(false);
  }

  const kontaktScroll = () => {
      if(typeof document !== 'undefined') {
        const kontaktSection = document.querySelector("#kontakt");
        kontaktSection.scrollIntoView({
          behavior: "smooth",
          top: 0,
          left: 0
        });
        gsap.set(list.current, { height: 0 });
        gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current], { visibility: 'hidden', display: "none" });
        setOpen(false);
      }
  }

  const dropdownMenu = () => {
    if(!open) {
      setOpen(true);
      gsap.set(hamburgerMenu.current, { height: "auto" });
      gsap.fromTo(list.current, { height: 0 }, { height: 180, duration: .5 })
        .then(() => {
         gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current], { visibility: 'visible', display: "block" });
        })
        .catch((e) => { console.log(e) });
    }
    else {
      setOpen(false);
      gsap.set([item1.current, item2.current, item3.current, item4.current, item5.current], { visibility: 'hidden', display: "block" });
      gsap.to(list.current, { height: 0, duration: .5 })
        .then(() => {
          gsap.set(hamburgerMenu.current, { height: "100%" });
        })
        .catch((e) => console.log(e));
    }
  }

  return (<menu ref={hamburgerMenu} className="hamburgerMenu">
    <div className="hamburgerMenu__top">
      <Link className="topLogo__link" to="/">
        <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
      </Link>

      <button className="hamburgerMenu__hamburger" onClick={() => dropdownMenu()}>
        <span className="hamburger--line" />
        <span className="hamburger--line" />
        <span className="hamburger--line" />
      </button>
    </div>

    <ul ref={list} className="hamburgerMenu__list">
      <li ref={item1} onClick={() => dropdownMenu()} className="hamburgerMenuList__item"><Link to="/">Home</Link></li>
      <li ref={item2} onClick={() => oNasScroll()} className="hamburgerMenuList__item">O nas</li>
      <li ref={item3} className="hamburgerMenuList__item"><Link to="/oferta">Oferta</Link></li>
      <li ref={item4} className="hamburgerMenuList__item"><Link to="/portfolio">Portfolio</Link></li>
      <li ref={item5} onClick={() => kontaktScroll()} className="hamburgerMenuList__item">Kontakt</li>
    </ul>
  </menu>);
}

export default HamburgerMenu;