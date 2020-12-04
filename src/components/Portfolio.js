import React, { useState, useEffect } from "react";
import { Link } from 'gatsby';

import Youtube from "./Youtube";
import youtubeLinks from "../helpers/portfolioHelper";

const Portfolio = ({id}) => {
  let [play, setPlay] = useState(false);
  let [video, setVideo] = useState(null);

  useEffect(() => {
    setPlay(true);
  }, [play]);

  useEffect(() => {
    setPlay(false);
  }, []);

  const handlePlay = (n) => {
    setPlay(false);
    switch(n) {
      case 1:
        setVideo(youtubeLinks.filmyPromocyjne1);
        break;
      case 2:
        setVideo(youtubeLinks.filmyPromocyjne2);
        break;
      default:
        setVideo(youtubeLinks.filmyPromocyjne3);
        break;
    }
    setPlay(!play);
  }

  return (<section ref={id} className="portfolioSection">
    <div className="yt">
      {play ? <Youtube medium={video} /> : ""}
    </div>
        <header className="sectionHeader">
          <h2 className="sectionHeader__h">
              Ostatnie realizacje
          </h2>
        </header>
        <main className="portfolio__content">
          <div className="portfolio__content__item--container" onClick={() => handlePlay(1)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne1.payload}/maxresdefault.jpg`} />
          </div>
          <div className="portfolio__content__item--container" onClick={() => handlePlay(2)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne2.payload}/maxresdefault.jpg`} />
          </div>
          <div className="portfolio__content__item--container" onClick={() => handlePlay(3)}>
            <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
            <img className="portfolio__content__item" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne3.payload}/maxresdefault.jpg`} />
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