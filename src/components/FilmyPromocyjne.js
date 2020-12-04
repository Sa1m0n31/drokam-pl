import React, { useState, useEffect } from "react";

import InfoBox from "./InfoBox";

import youtubeLinks from "../helpers/portfolioHelper";
import Youtube from "./Youtube"

const FilmyPromocyjne = () => {
  const [play, setPlay] = useState(false);
  let video;

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
        video = youtubeLinks.filmyPromocyjne1;
        break;
      case 2:
        video = youtubeLinks.filmyPromocyjne2;
        break;
      case 3:
        video = youtubeLinks.filmyPromocyjne3;
        break;
      case 4:
        video = youtubeLinks.filmyPromocyjne4;
        break;
      case 5:
        video = youtubeLinks.filmyPromocyjne5;
        break;
      case 6:
        video = youtubeLinks.filmyPromocyjne6;
        break;
      case 7:
        video = youtubeLinks.filmyPromocyjne7;
        break;
      case 8:
        video = youtubeLinks.filmyPromocyjne8;
        break;
      default:
        break;
    }
    console.log(play);
    setPlay(!play);
  }

  return (<main className="portfolioSubpage">
    <div className="yt">
      {play ? <Youtube medium={youtubeLinks.filmyPromocyjne1} /> : ""}
    </div>
    <div className="filmyPromocyjneTop">
      <button className="filmyPromocyjne__player filmyPromocyjne__first" onClick={() => handlePlay(1)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne1.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second"  onClick={() => handlePlay(2)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne2.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third"  onClick={() => handlePlay(3)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne3.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fourth"  onClick={() => handlePlay(4)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne4.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fifth"  onClick={() => handlePlay(5)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne5.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>

    <InfoBox
      title="Pozwól nam uchwycić to, co dla Ciebie ważne"
      p1="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qupa"
      background={true}
    />

    <div className="filmyPromocyjneBottom">
      <button className="filmyPromocyjne__player filmyPromocyjne__first"  onClick={() => handlePlay(6)}>
        <img className="filmyPromocyjne__first" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne6.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second"  onClick={() => handlePlay(7)}>
        <img className="filmyPromocyjne__first" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne7.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third"  onClick={() => handlePlay(8)}>
        <img className="filmyPromocyjne__first" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne8.payload}/hqdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>
    </main>);
}

export default FilmyPromocyjne;