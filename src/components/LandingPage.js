import React from "react";

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image";

const LandingPage = () => {

  const data = useStaticQuery(graphql`
      query Slider {
          landing: file(relativePath: { eq: "drokam-landing.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          centerLogo: file(relativePath: { eq: "drokam-logo.png" }) {
              childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 123) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (<div className="landingPage">
      <Img className="landingPageImg" fluid={data.landing.childImageSharp.fluid} alt="drokam" />
      <div className="topLogo">
          <img className="topLogo__img" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-logo" />
      </div>
      <menu className="topMenu">
        <ul className="topMenuList horizontalList">
          <li className="topMenuList__item">Home</li>
          <li className="topMenuList__item">O nas</li>
          <li className="topMenuList__item">Oferta</li>
          <li className="topMenuList__item">Portfolio</li>
          <li className="topMenuList__item">Kontakt</li>
        </ul>
      </menu>
      <div className="centerLogo">
        <Img className="centerLogo__img" fluid={data.centerLogo.childImageSharp.fluid} alt="drokam-logo" />
      </div>
      <button className="btn btn--callToAction">
        Poznaj nas!
      </button>
  </div>);
};

export default LandingPage;