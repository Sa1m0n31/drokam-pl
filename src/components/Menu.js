import React from "react";

import { Link } from 'gatsby';

const Menu = () => (
  <ul className="topMenuList horizontalList">
    <li className="topMenuList__item"><Link to="/">Home</Link></li>
    <li className="topMenuList__item">O nas</li>
      <li className="topMenuList__item"><Link to="/oferta">Oferta</Link></li>
    <li className="topMenuList__item"><Link to="/portfolio">Portfolio</Link></li>
    <li className="topMenuList__item">Kontakt</li>
  </ul>
);

export default Menu;