import React, { useState } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import { gsap } from "gsap/all";

import PageMenu from "./PageMenu"
import HamburgerMenu from "./HamburgerMenu"
import PageMobileMenu from "./PageMobileMenu"

const Header = ({title, mark}) => {
  const [menu, setMenu] = useState(false);

  const data = useStaticQuery(graphql`
      query Header {
          header: file(relativePath: { eq: "drokam-header-background.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 350) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  const openMenu = () => {
    if(typeof document !== 'undefined') {
      const el = document.querySelector(".pageMobileMenu");
      gsap.set(el, { x: -3000 })
      gsap.to(el,{ x: 0, duration: .5 });
      setMenu(true);
    }
  }

  return (<header className="pageHeader">
    <>
      {menu ? <PageMobileMenu /> : "" }
    </>
    <div className="btn hamburgerMenu__hamburger" onClick={() => openMenu()}>
      <span className="hamburger--line" />
      <span className="hamburger--line" />
      <span className="hamburger--line" />
    </div>
      <Img className="headerBackground" fluid={data.header.childImageSharp.fluid} alt="drokam-background" />
      <div className="topLogo">
        <Link to="/">
          <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
        </Link>
      </div>
      <menu className="topMenu">
        <PageMenu mark={mark} />
      </menu>
      <h1 className="pageHeader__h">
        {title}
      </h1>
  </header>);
}

export default Header;