import React from "react";
import { Link } from "gatsby"

const HamburgerMenu = () => {
  return (<menu className="hamburgerMenu">
    <Link className="topLogo__link" to="/">
      <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
    </Link>

    <div className="hamburgerMenu__hamburger">
      <span className="hamburger--line" />
      <span className="hamburger--line" />
      <span className="hamburger--line" />
    </div>
  </menu>);
}

export default HamburgerMenu;