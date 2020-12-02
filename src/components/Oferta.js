import React, { useRef } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import { gsap } from 'gsap/all';

const Oferta = () => {
  const data = useStaticQuery(graphql`
      query Oferta {
          oferta1: file(relativePath: { eq: "oferta-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          oferta2: file(relativePath: { eq: "oferta-2.png" }) {
              childImageSharp {
                  fluid(maxWidth: 812, maxHeight: 501) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          logo: file(relativePath: { eq: "drokam-logo-mobile.png" }) {
              childImageSharp {
                  fluid(maxWidth: 831, maxHeight: 123) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  const hoverHandle = (arg = 1) => {
    switch(arg) {
      case 1:
        //gsap.fromTo(".ofertaItem__label::before", { opacity: 1 }, { opacity: 0, duration: 1 })
        break;
      default:
        break;
    }
  }

  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);

  return (<main className="ofertaMain">
      <div className="ofertaMain__content">
        <div className="ofertaItem">
          <Link onMouseOver={() => hoverHandle(1)} className="ofertaItem__link" to="/filmy-promocyjne">
            <Img className="ofertaItem__img" fluid={data.oferta1.childImageSharp.fluid} alt="drokam-oferta-1" />
          </Link>
          <h2 id="one" ref={one} className="ofertaItem__label">Filmy promocyjne</h2>
        </div>
        <div className="ofertaItem">
          <Link className="ofertaItem__link" to="/fotografia-reklamowa">
            <Img className="ofertaItem__img" fluid={data.oferta2.childImageSharp.fluid} alt="drokam-oferta-2" />
          </Link>
          <h2 ref={two} className="ofertaItem__label">Fotografia reklamowa</h2>
        </div>
        <div className="ofertaItem">
          <Link className="ofertaItem__link" to="/imprezy-okolicznosciowe">
            <Img className="ofertaItem__img" fluid={data.oferta1.childImageSharp.fluid} alt="drokam-oferta-3" />
          </Link>
          <h2 ref={three} className="ofertaItem__label">Imprezy okolicznościowe</h2>
        </div>
        <div className="ofertaItem">
          <Link className="ofertaItem__link" to="/rolnictwo-precyzyjne">
            <Img className="ofertaItem__img" fluid={data.oferta2.childImageSharp.fluid} alt="drokam-oferta-4" />
          </Link>
          <h2 ref={four} className="ofertaItem__label">Rolnictwo precyzyjne</h2>
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