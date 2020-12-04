import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';

import Youtube from "./Youtube";
import youtubeLinks from "../helpers/portfolioHelper";

const Portfolio = ({id}) => {
  let [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [play]);

  useEffect(() => {
    setPlay(false);
  }, []);

  const handlePlay = (n) => {
    setPlay(false);
    let video;
    switch(n) {
      case 1:
        video = youtubeLinks.filmyPromocyjne1;
        break;
      case 2:
        video = youtubeLinks.filmyPromocyjne2;
        break;
      case 3:
        video = youtubeLinks.filmyPromocyjne3;
        break;
      default:
        break;
    }
    console.log(play);
    setPlay(!play);
  }

  return (<section ref={id} className="portfolioSection">
    <div className="yt">
      {play ? <Youtube medium={youtubeLinks.filmyPromocyjne1} /> : ""}
    </div>
        <header className="sectionHeader">
          <h2 className="sectionHeader__h">
              Ostatnie realizacje
          </h2>
        </header>
        <main className="portfolio__content">
          <div className="portfolio__content__item--container" onClick={() => handlePlay(1)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={require("../../static/img/drokam-4.png")} alt="portfolio" />
          </div>
          <div className="portfolio__content__item--container" onClick={() => handlePlay(2)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={require("../../static/img/drokam-4.png")} alt="portfolio" />
          </div>
          <div className="portfolio__content__item--container" onClick={() => handlePlay(3)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={require("../../static/img/drokam-4.png")} alt="portfolio" />
          </div>
        </main>
        <section className="portfolio__bottom">
          <button className="btn btn--portfolio">
            <Link to="/portfolio">
              Sprawdź nasze portfolio
            </Link>
          </button>
        </section>
  </section>);
}

export default Portfolio;