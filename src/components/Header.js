import React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import Menu from "./Menu";

const Header = ({title}) => {
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
        <Link to="/">
          <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
        </Link>
      </div>
      <menu className="topMenu">
        <Menu />
      </menu>
      <h1 className="pageHeader__h">
        {title}
      </h1>
  </header>);
}

export default Header;