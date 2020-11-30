import React, { useEffect, useRef, useState } from "react"

import Menu from "./Menu";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import { gsap } from 'gsap/all';

const LandingPage = () => {
  const landingPage = useRef(null);

  const [scrollToFrontContainer, setScrollToFrontContainer] = useState(true);

  const data = useStaticQuery(graphql`
      query Slider {
          landing: file(relativePath: { eq: "drokam-landing.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          centerLogo: file(relativePath: { eq: "drokam-logo-landing.png" }) {
              childImageSharp {
                  fluid(maxWidth: 850, maxHeight: 123) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  function disableScrolling(){
    const x=window.scrollX;
    const y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  function enableScrolling(){
    window.onscroll=function(){};
  }

  const handleScroll = (e) => {
    /* if(((typeof window !== 'undefined')&&(typeof document !== 'undefined'))&&(scrollToFrontContainer)) {
      disableScrolling();
      const frontContainer = document.querySelector(".frontContainer");
      gsap.fromTo(landingPage.current, { y: 0 }, { y: -window.innerHeight, duration: 1 });
      gsap.fromTo(frontContainer, { y: 0 }, { y: -window.innerHeight, duration: 1 })
        .then(() => {
          enableScrolling();
        });
    } */
  }

  const handleMouseMove = (e) => {
    if(e.pageY < landingPage.current.clientHeight) {
      setScrollToFrontContainer(true);
    }
    else {
      setScrollToFrontContainer(false);
    }
  }

  /* useEffect(() => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      const frontContainer = document.querySelector(".frontContainer");
      window.addEventListener("scroll", () => {
          disableScrolling();
          gsap.fromTo(frontContainer, { y: 0 }, { y: -window.innerHeight + window.pageYOffset, duration: 1 })
            .then(() => enableScrolling());
      });
    }
  }, []); */

  return (<div className="landingPage" ref={landingPage} onMouseMove={e => handleMouseMove(e)}>
      <Img className="landingPageImg" fluid={data.landing.childImageSharp.fluid} alt="drokam" />
      <menu className="topMenu">
        <Menu frontPage={true} />
      </menu>
      <div className="centerLogo">
        <Img className="centerLogo__img" fluid={data.centerLogo.childImageSharp.fluid} alt="drokam-logo" />
      </div>
    {/*<button className="btn btn--callToAction">
        Poznaj nas!
      </button>*/}
  </div>);
};

export default LandingPage;