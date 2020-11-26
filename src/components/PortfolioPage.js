import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
      query PortfolioItems {
          portfolio1: file(relativePath: { eq: "oferta-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          portfolio2: file(relativePath: { eq: "oferta-2.png" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (<main className="portfolioPage">
    <p className="portfolioPage__p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/sygnet-dark.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Filmy promocyjne
      </h2>
      <div className="portfolioSection__content">
        <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        Zobacz więcej
      </button>
    </section>
    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/sygnet-dark.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Filmy promocyjne
      </h2>
      <div className="portfolioSection__content">
        <iframe className="portfolioSection__content__img" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        <iframe className="portfolioSection__content__img" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        <iframe className="portfolioSection__content__img" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        Zobacz więcej
      </button>
    </section>
  </main>);
}

export default PortfolioPage;