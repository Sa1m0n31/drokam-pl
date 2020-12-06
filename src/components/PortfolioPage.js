import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import Img from 'gatsby-image';

import youtubeLinks from "../helpers/portfolioHelper"

import Youtube from "./Youtube";

const PortfolioPage = () => {
  const [play, setPlay] = useState(false);
  const [video, setVideo] = useState(null);

  const data = useStaticQuery(graphql`
      query PortfolioItems {
          fotografieReklamowe1: file(relativePath: { eq: "drokam-10.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          fotografieReklamowe2: file(relativePath: { eq: "drokam-2.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          fotografieReklamowe3: file(relativePath: { eq: "drokam-3.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          imprezyOkolicznosciowe1: file(relativePath: { eq: "drokam-4.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          imprezyOkolicznosciowe2: file(relativePath: { eq: "drokam-5.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          imprezyOkolicznosciowe3: file(relativePath: { eq: "drokam-6.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          rolnictwoPrecyzyjne1: file(relativePath: { eq: "drokam-7.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          rolnictwoPrecyzyjne2: file(relativePath: { eq: "drokam-8.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 680, maxHeight: 357) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          rolnictwoPrecyzyjne3: file(relativePath: { eq: "drokam-9.jpg" }) {
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
    console.log(video);
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
          <img className="portfolioSection__content__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne1.payload}/maxresdefault.jpg`} alt="filmy-promocyjne-youtube" />
          <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("filmyPromocyjne2")}>
          <img className="portfolioSection__content__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne2.payload}/maxresdefault.jpg`} alt="filmy-promocyjne-youtube" />
          <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("filmyPromocyjne3")}>
          <img className="portfolioSection__content__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne3.payload}/maxresdefault.jpg`} alt="filmy-promocyjne-youtube" />
          <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
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
      <div className="portfolioSection__content bigger">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("fotografieReklamowe1")} >
          <Img className="portfolioSection__content__img" fluid={data.fotografieReklamowe1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("fotografieReklamowe2")}>
          <Img className="portfolioSection__content__img" fluid={data.fotografieReklamowe2.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("fotografieReklamowe3")}>
          <Img className="portfolioSection__content__img" fluid={data.fotografieReklamowe3.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/fotografie-reklamowe">Zobacz więcej</Link>
      </button>
    </section>

    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/drokam-sygnet.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Rolnictwo<br/>precyzyjne
      </h2>
      <div className="portfolioSection__content bigger">
        <button className="portfolioSection__content__player" onClick={() => playYoutube("rolnictwoPrecyzyjne1")} >
          <Img className="portfolioSection__content__img" fluid={data.rolnictwoPrecyzyjne1.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("rolnictwoPrecyzyjne2")}>
          <Img className="portfolioSection__content__img" fluid={data.rolnictwoPrecyzyjne2.childImageSharp.fluid} alt="portfolio-1" />
        </button>
        <button className="portfolioSection__content__player over-1000" onClick={() => playYoutube("rolnictwoPrecyzyjne3")}>
          <Img className="portfolioSection__content__img" fluid={data.rolnictwoPrecyzyjne3.childImageSharp.fluid} alt="portfolio-1" />
        </button>
      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        <Link to="/rolnictwo-precyzyjne">Zobacz więcej</Link>
      </button>
    </section>
  </main>);
}

export default PortfolioPage;