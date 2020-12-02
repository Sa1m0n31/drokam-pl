import React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import PageMenu from "./PageMenu"
import HamburgerMenu from "./HamburgerMenu"

const Header = ({title}) => {
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

  return (<header className="pageHeader">
    <div className="hamburgerMenu__hamburger">
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
        <PageMenu />
      </menu>
      <h1 className="pageHeader__h">
        {title}
      </h1>
  </header>);
}

export default Header;