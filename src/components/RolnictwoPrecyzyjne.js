import React, { useEffect, useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';
import moveUpBtnHandle from "../helpers/moveUpBtn"
import Youtube from "./Youtube"
import youtubeLinks from "../helpers/portfolioHelper"

const RolnictwoPrecyzyjne = () => {

  useEffect(() => {
    moveUpBtnHandle();
  }, []);

  const data = useStaticQuery(graphql`
      query RolnictwoPrecyzyjneQuery {
          mapa1: file(relativePath: { eq: "mapa-wysokosci-terenu.png" }) {
              childImageSharp {
                  fluid(maxWidth: 5800, maxHeight: 3300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          mapa2: file(relativePath: { eq: "ortofotomapa.png" }) {
              childImageSharp {
                  fluid(maxWidth: 5800, maxHeight: 3300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          mapa3: file(relativePath: { eq: "mapa-zdrowotnosci-roslin.png" }) {
              childImageSharp {
                  fluid(maxWidth: 5800, maxHeight: 3300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return <main className="portfolioSubpage extraMargin">
    <main className="rolnictwoPrecyzyjne">
      <div className="rolnictwoPrecyzyjne__mapa__container">
        <h2 className="mapa__title">Mapa wysokości terenu</h2>
        <Img className="rolnictwoPrecyzyjne__mapa" fluid={data.mapa1.childImageSharp.fluid} alt="mapa-wysokosci-terenu" />
      </div>
      <div className="rolnictwoPrecyzyjne__mapa__container">
        <h2 className="mapa__title">Ortofotomapa</h2>
        <Img className="rolnictwoPrecyzyjne__mapa" fluid={data.mapa2.childImageSharp.fluid} alt="ortofotomapa" />
      </div>
      <div className="rolnictwoPrecyzyjne__mapa__container">
        <h2 className="mapa__title">Mapa zdrowotności roślin</h2>
        <Img className="rolnictwoPrecyzyjne__mapa" fluid={data.mapa3.childImageSharp.fluid} alt="mapa-zdrowotnosci-roslin" />
      </div>








      {/*<div className="firstRow">
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
      </div>*/}
    </main>
  </main>
}

export default RolnictwoPrecyzyjne;