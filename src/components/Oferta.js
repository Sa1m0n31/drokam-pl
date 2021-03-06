import React, { useRef, useEffect } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import { gsap } from 'gsap/all';
import moveUpBtnHandle from "../helpers/moveUpBtn"

const Oferta = () => {
  useEffect(() => {
    moveUpBtnHandle();
  }, []);

  const data = useStaticQuery(graphql`
      query Oferta {
          oferta1: file(relativePath: { eq: "drokam-6.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          oferta2: file(relativePath: { eq: "drokam-8.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          oferta3: file(relativePath: { eq: "drokam-13.png" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          oferta4: file(relativePath: { eq: "drokam-9.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          logo: file(relativePath: { eq: "drokam-logo-mobile.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 831, maxHeight: 123) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  const hoverHandle = (arg = 1) => {
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
      if(window.innerWidth >  700) {
        let el = document.querySelector(`.ofertaItem:nth-child(${arg}) .ofertaItem__label--before:first-child`);
        gsap.fromTo(el, { width: 0 }, { width: 50, duration: .5 });
      }
    }
  }

  const leaveHandle = (arg = 1) => {
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
     if(window.innerWidth > 700) {
       let el = document.querySelector(`.ofertaItem:nth-child(${arg}) .ofertaItem__label--before:first-child`);
       gsap.fromTo(el, { width: 50 }, { width: 0, duration: .5 });
     }
    }
  }

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  return (<main className="ofertaMain">
      <div className="ofertaMain__content">
        <div onMouseOver={() => hoverHandle(1)} onMouseLeave={() => leaveHandle(1)} className="ofertaItem">
          <Link
                className="ofertaItem__link"
                to="/filmy-promocyjne">
            <Img className="ofertaItem__img" fluid={data.oferta1.childImageSharp.fluid} alt="drokam-oferta-1" />
          </Link>
          <h2 id="one" ref={one} className="ofertaItem__label">
            <span className="ofertaItem__label--before" />
            Filmy promocyjne
          </h2>
        </div>
        <div className="ofertaItem">
          <Link
            onMouseOver={() => hoverHandle(2)}
            onMouseLeave={() => leaveHandle(2)}
            className="ofertaItem__link"
            to="/fotografie-reklamowe">
            <Img className="ofertaItem__img" fluid={data.oferta2.childImageSharp.fluid} alt="drokam-oferta-2" />
          </Link>
          <h2 ref={two} className="ofertaItem__label">
            <span className="ofertaItem__label--before" />
            Fotografia reklamowa
          </h2>
        </div>
        <div className="ofertaItem">
          <Link
            onMouseOver={() => hoverHandle(3)}
            onMouseLeave={() => leaveHandle(3)}
            className="ofertaItem__link"
            to="/">
            <Img className="ofertaItem__img" fluid={data.oferta3.childImageSharp.fluid} alt="drokam-oferta-3" />
          </Link>
          <h2 ref={three} className="ofertaItem__label">
            <span className="ofertaItem__label--before" />
            Imprezy okolicznościowe
          </h2>
        </div>
        <div className="ofertaItem">
          <Link
            onMouseOver={() => hoverHandle(4)}
            onMouseLeave={() => leaveHandle(4)}
            className="ofertaItem__link"
            to="/rolnictwo-precyzyjne">
            <Img className="ofertaItem__img" fluid={data.oferta4.childImageSharp.fluid} alt="drokam-oferta-4" />
          </Link>
          <h2 ref={four} className="ofertaItem__label">
            <span className="ofertaItem__label--before" />
            Rolnictwo precyzyjne
          </h2>
        </div>
      </div>
    <div className="ofertaMain__bottom">
      <Img className="ofertaMain__logo" fluid={data.logo.childImageSharp.fluid} alt="drokam" />
      <h3 className="ofertaMain__slogan">Sprawdź pełnie naszych możliwości.</h3>
      <button className="ofertaMain__btn btn btn--portfolio">
        <Link to="/portfolio">
          Przejdź do portfolio
        </Link>
      </button>
    </div>
  </main>);
}

export default Oferta;