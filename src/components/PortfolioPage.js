import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import { disableScroll, enableScroll } from "../helpers/enableScroll";
import youtubeLinks from "../helpers/portfolioHelper"

import Youtube from "./Youtube";

const PortfolioPage = () => {
  const [play, setPlay] = useState(false);
  const [video, setVideo] = useState(null);

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
          player: file(relativePath: { eq: "player.png" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  useEffect(() => {
    setPlay(true);
  }, [play]);

  useEffect(() => {
    setPlay(false);
    window.scrollBy({
      top: window.pageYOffset
    });
  }, []);

  const playYoutube = (arg) => {
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
      const yt = document.querySelector(".yt");
      const val = window.pageYOffset + "px";
      yt.style.top = val;
    }

    switch(arg) {
      case "filmyPromocyjne1":
        setVideo(youtubeLinks.filmyPromocyjne1);
        break;
      case "filmyPromocyjne2":
        setVideo(youtubeLinks.filmyPromocyjne2);
        break;
      case "filmyPromocyjne3":
        setVideo(youtubeLinks.filmyPromocyjne3);
        break;
      case "fotografieReklamowe1":
        setVideo(youtubeLinks.fotografieReklamowe1);
        break;
      case "fotografieReklamowe2":
        setVideo(youtubeLinks.fotografieReklamowe2);
        break;
      case "fotografieReklamowe3":
        setVideo(youtubeLinks.fotografieReklamowe3);
        break;
      case "imprezyOkolicznosciowe1":
        setVideo(youtubeLinks.imprezyOkolicznosciowe1);
        break;
      case "imprezyOkolicznosciowe2":
        setVideo(youtubeLinks.imprezyOkolicznosciowe2);
        break;
      case "imprezyOkolicznosciowe3":
        setVideo(youtubeLinks.imprezyOkolicznosciowe3);
        break;
      case "rolnictwoPrecyzyjne1":
        setVideo(youtubeLinks.rolnictwoPrecyzyjne1);
        break;
      case "rolnictwoPrecyzyjne2":
        setVideo(youtubeLinks.rolnictwoPrecyzyjne2);
        break;
      case "rolnictwoPrecyzyjne3":
        setVideo(youtubeLinks.rolnictwoPrecyzyjne3);
        break;
      default:
        break;
    }
    setPlay(!play);
  }

  return (<main className="portfolioPage">
    <div className="yt">
      {play ? <Youtube medium={video} /> : ""}
    </div>
    <p className="portfolioPage__p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <section className="portfolioSectionP">
      <img src={require("../../static/img/drokam-sygnet.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Filmy<br/>promocyjne
      </h2>
      <div className="portfolioSection__content">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("filmyPromocyjne1")} >
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("filmyPromocyjne2")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("filmyPromocyjne3")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/filmy-promocyjne">Zobacz więcej</Link>
      </button>
    </section>

    <section className="portfolioSectionP">
      <img src={require("../../static/img/drokam-sygnet.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
          Fotografie<br/>reklamowe
      </h2>
      <div className="portfolioSection__content">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("fotografieReklamowe1")} >
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("fotografieReklamowe2")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("fotografieReklamowe3")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/fotografie-reklamowe">Zobacz więcej</Link>
      </button>
    </section>

    <section className="portfolioSectionP">
      <img src={require("../../static/img/drokam-sygnet.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Imprezy<br/>okolicznościowe
      </h2>
      <div className="portfolioSection__content">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("imprezyOkolicznosciowe1")} >
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("imprezyOkolicznosciowe2")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("imprezyOkolicznosciowe3")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/imprezy-okolicznosciowe">Zobacz więcej</Link>
      </button>
    </section>

    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/drokam-sygnet.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Rolnictwo<br/>precyzyjne
      </h2>
      <div className="portfolioSection__content">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("rolnictwoPrecyzyjne1")} >
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("rolnictwoPrecyzyjne2")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("rolnictwoPrecyzyjne3")}>
          <Img className="portfolioSection__content__img" fluid={data.portfolio1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/rolnictwo-precyzyjne">Zobacz więcej</Link>
      </button>
    </section>
  </main>);
}

export default PortfolioPage;