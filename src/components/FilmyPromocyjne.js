import React, { useState, useEffect } from "react";

import InfoBox from "./InfoBox";

import youtubeLinks from "../helpers/portfolioHelper";
import Youtube from "./Youtube"
import moveUpBtnHandle from "../helpers/moveUpBtn"

const FilmyPromocyjne = () => {
  const [play, setPlay] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    setPlay(true);
  }, [play]);

  useEffect(() => {
    moveUpBtnHandle();
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
      case 3:
        setVideo(youtubeLinks.filmyPromocyjne3);
        break;
      case 4:
        setVideo(youtubeLinks.filmyPromocyjne4);
        break;
      case 5:
        setVideo(youtubeLinks.filmyPromocyjne5);
        break;
      case 6:
        setVideo(youtubeLinks.filmyPromocyjne6);
        break;
      case 7:
        setVideo(youtubeLinks.filmyPromocyjne7);
        break;
      case 8:
        setVideo(youtubeLinks.filmyPromocyjne8);
        break;
      case 9:
        setVideo(youtubeLinks.filmyPromocyjne9);
        break;
      case 10:
        setVideo(youtubeLinks.filmyPromocyjne10);
        break;
      case 11:
        setVideo(youtubeLinks.filmyPromocyjne11);
        break;
      default:
        setVideo(youtubeLinks.filmyPromocyjne12);
        break;
    }
    console.log(play);
    setPlay(!play);
  }

  return (<main className="portfolioSubpage">
    <div className="yt">
      {play ? <Youtube medium={video} /> : ""}
    </div>
    <div className="filmyPromocyjneTop">
      <button className="filmyPromocyjne__player filmyPromocyjne__first" onClick={() => handlePlay(1)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne1.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second"  onClick={() => handlePlay(6)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne6.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third"  onClick={() => handlePlay(3)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne3.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fourth"  onClick={() => handlePlay(4)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne4.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fifth"  onClick={() => handlePlay(5)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne5.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__sixth" onClick={() => handlePlay(2)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne2.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>

    <InfoBox
      title="Pozwól nam uchwycić to, co dla Ciebie ważne"
      p1="Sto procent profesjonalizmu, sto procent statysfakcji. Zadzwoń do nas, wypróbuj naszych usług i przekonaj się sam!"
      background={true}
    />

    <div className="filmyPromocyjneTop">
      <button className="filmyPromocyjne__player filmyPromocyjne__first" onClick={() => handlePlay(7)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne7.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second"  onClick={() => handlePlay(8)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne8.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third"  onClick={() => handlePlay(9)} >
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne9.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fourth"  onClick={() => handlePlay(10)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne10.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fifth"  onClick={() => handlePlay(11)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne11.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__sixth" onClick={() => handlePlay(12)}>
        <img className="filmyPromocyjne__img" src={`https://img.youtube.com/vi/${youtubeLinks.filmyPromocyjne12.payload}/maxresdefault.jpg`} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>
    </main>);
}

export default FilmyPromocyjne;