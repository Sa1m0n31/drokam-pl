import React from "react";

import InfoBox from "./InfoBox";

import youtubeLinks from "../helpers/portfolioHelper";

const FilmyPromocyjne = () => {
  return (<main className="portfolioSubpage">
    <h2 className="portfolioSubpageHeader">
      Filmy promocyjne
    </h2>
    <div className="filmyPromocyjneTop">
      <button className="filmyPromocyjne__player filmyPromocyjne__first">
        <img className="filmyPromocyjne__img" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second">
        <img className="filmyPromocyjne__img" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third">
        <img className="filmyPromocyjne__img" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fourth">
        <img className="filmyPromocyjne__img" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__fifth">
        <img className="filmyPromocyjne__img" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>

    <InfoBox
      title="Pozwól nam uchwycić to, co dla Ciebie ważne"
      p1="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qupa"
      background={true}
    />

    <div className="filmyPromocyjneBottom">
      <button className="filmyPromocyjne__player filmyPromocyjne__first">
        <img className="filmyPromocyjne__first" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn playBig" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__second">
        <img className="filmyPromocyjne__first" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
      <button className="filmyPromocyjne__player filmyPromocyjne__third">
        <img className="filmyPromocyjne__first" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
        <img className="playBtn" src={require("../../static/img/play.png")} alt="play" />
      </button>
    </div>
    </main>);
}

export default FilmyPromocyjne;