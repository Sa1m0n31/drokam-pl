import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

const RolnictwoPrecyzyjne = () => {
  const data = useStaticQuery(graphql`
      query RolnictwoPrecyzyjneQuery {
          row11: file(relativePath: { eq: "drokam-8.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          row12: file(relativePath: { eq: "drokam-9.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 500, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          row21: file(relativePath: { eq: "drokam-10.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          row22: file(relativePath: { eq: "drokam-11.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 500) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return <main className="portfolioSubpage extraMargin">
    <main className="rolnictwoPrecyzyjne">
      <div className="firstRow">
          <Img className="firstRow__img" fluid={data.row11.childImageSharp.fluid} alt="drokam-rolnictwo-precyzyjne" />
          <div className="firstRow__center">
            <h4 className="center__title">
              Lorem ipsum
            </h4>
            <p className="center__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="center__list">
              <li className="center__list__item"><img src={require("../../static/img/drokam-sygnet.png")} alt="drokam" />
                Lorem ipsum
              </li>
              <li className="center__list__item"><img src={require("../../static/img/drokam-sygnet.png")} alt="drokam" />
                Lorem ipsum
              </li>
              <li className="center__list__item"><img src={require("../../static/img/drokam-sygnet.png")} alt="drokam" />
                Lorem ipsum
              </li>
              <li className="center__list__item"><img src={require("../../static/img/drokam-sygnet.png")} alt="drokam" />
                Lorem ipsum
              </li>
              <li className="center__list__item"><img src={require("../../static/img/drokam-sygnet.png")} alt="drokam" />
                Lorem ipsum
              </li>
            </ul>
            <img className="center__logo" src={require("../../static/img/drokam-logo.png")} alt="drokam" />
          </div>
          <Img className="firstRow__img" fluid={data.row12.childImageSharp.fluid} alt="drokam-rolnictwo-precyzyjne" />
      </div>
      <div className="secondRow">
        <Img className="secondRow__img" fluid={data.row21.childImageSharp.fluid} alt="drokam-rolnictwo-precyzyjne" />
        <Img className="secondRow__img" fluid={data.row22.childImageSharp.fluid} alt="drokam-rolnictwo-precyzyjne" />
      </div>
    </main>
  </main>
}

export default RolnictwoPrecyzyjne;