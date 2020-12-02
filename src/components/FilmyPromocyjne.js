import React from "react";

import InfoBox from "./InfoBox";

import youtubeLinks from "../helpers/portfolioHelper";

const FilmyPromocyjne = () => {
  return (<main className="portfolioSubpage">
    <h2 className="portfolioSubpageHeader">
      Filmy promocyjne
    </h2>
    <div className="filmyPromocyjneTop">
      <button className="filmyPromocyjne__player">
        <img className="filmyPromocyjne__first" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
      </button>
    </div>

    <InfoBox
      title="Pozwól nam uchwycić to, co dla Ciebie ważne"
      p1="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qupa"
      background={true}
    />

    <div className="filmyPromocyjneBottom">
      <img className="filmyPromocyjne__first" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
      <img className="filmyPromocyjne__second" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
      <img className="filmyPromocyjne__third" src={require("./../../static/img/player.png")} alt="drokam-filmy-promocyjne" />
    </div>
    </main>);
}

export default FilmyPromocyjne;