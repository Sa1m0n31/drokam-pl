import React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

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
          logo: file(relativePath: { eq: "drokam-logo-dark.png" }) {
              childImageSharp {
                  fluid(maxWidth: 831, maxHeight: 123) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (<main className="ofertaMain">
      <div className="ofertaMain__content">
        <div className="ofertaItem">
          <Img className="ofertaItem__img" fluid={data.oferta1.childImageSharp.fluid} alt="drokam-oferta-1" />
          <h2 className="ofertaItem__label">Fotografia reklamowa</h2>
        </div>
        <div className="ofertaItem">
          <Img className="ofertaItem__img" fluid={data.oferta2.childImageSharp.fluid} alt="drokam-oferta-2" />
          <h2 className="ofertaItem__label">Fotografia reklamowa</h2>
        </div>
        <div className="ofertaItem">
          <Img className="ofertaItem__img" fluid={data.oferta1.childImageSharp.fluid} alt="drokam-oferta-3" />
          <h2 className="ofertaItem__label">Fotografia reklamowa</h2>
        </div>
        <div className="ofertaItem">
          <Img className="ofertaItem__img" fluid={data.oferta2.childImageSharp.fluid} alt="drokam-oferta-4" />
          <h2 className="ofertaItem__label">Fotografia reklamowa</h2>
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