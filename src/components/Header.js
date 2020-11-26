import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import Menu from "./Menu";

const Header = () => {
  const data = useStaticQuery(graphql`
      query Header {
          header: file(relativePath: { eq: "header-background.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1920, maxHeight: 350) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (<header className="pageHeader">
      <Img className="headerBackground" fluid={data.header.childImageSharp.fluid} alt="drokam-background" />
      <div className="topLogo">
        <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
      </div>
      <menu className="topMenu">
        <Menu />
      </menu>
      <h1 className="pageHeader__h">
        Nasza oferta
      </h1>
  </header>);
}

export default Header;