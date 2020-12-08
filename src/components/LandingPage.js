import React, { useEffect, useRef } from "react"

import Menu from "./Menu";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { gsap } from 'gsap/all';
import HamburgerMenu from "./HamburgerMenu"

const LandingPage = () => {
  const landingPage = useRef(null);
  const centerLogo = useRef(null);

  useEffect(() => {
    gsap.fromTo(centerLogo.current, { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
  }, []);

  const data = useStaticQuery(graphql`
      query Slider {
          landing: file(relativePath: { eq: "drokam-landing.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
          landingMobile: file(relativePath: { eq: "drokam-landing-mobile.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 414, maxHeight: 736) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
          centerLogo: file(relativePath: { eq: "drokam-logo-landing.png" }) {
              childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 123) {
                      ...GatsbyImageSharpFluid_noBase64
                  }
              }
          }
      }
  `);

  return (<div className="landingPage" ref={landingPage}>
      <Img loading="eager" className="landingPageImg" fluid={data.landing.childImageSharp.fluid} alt="drokam" />
      <Img loading="eager" className="landingPageImg landingPageImg--mobile" fluid={data.landingMobile.childImageSharp.fluid} alt="drokam" />
      <menu className="topMenu">
        <Menu frontPage={true} />
        <HamburgerMenu />
      </menu>
      <div ref={centerLogo} className="centerLogo">
        <Img loading="eager" className="centerLogo__img" fluid={data.centerLogo.childImageSharp.fluid} alt="drokam-logo" />
        <img loading="eager" className="centerLogo__img--mobile" src={require("../../static/img/drokam-logo-mobile.webp")} alt="drokam-logo" />
      </div>
  </div>);
};

export default LandingPage;