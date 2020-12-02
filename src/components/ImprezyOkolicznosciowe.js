import React from "react";

const ImprezyOkolicznosciowe = () => {
  return <main className="portfolioSubpage">
    <h2 className="portfolioSubpageHeader">
      Imprezy okolicznościowe
    </h2>
    <main className="imprezyOkolicznosciowe__main">
      <img className="video-1" src={require("../../static/img/player.png")} alt="player" />
      <img className="video-2" src={require("../../static/img/player.png")} alt="player" />

      <img className="img-1" src={require("../../static/img/drokam-3.png")} alt="img-1" />
      <img className="img-2" src={require("../../static/img/drokam-3.png")} alt="img-2" />
      <img className="img-3" src={require("../../static/img/drokam-3.png")} alt="img-3" />
      <img className="img-4" src={require("../../static/img/drokam-3.png")} alt="img-4" />
      <img className="img-5" src={require("../../static/img/drokam-3.png")} alt="img-5" />
    </main>
  </main>
}

export default ImprezyOkolicznosciowe;