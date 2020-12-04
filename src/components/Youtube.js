import React, { useEffect, useState, useRef } from "react";

import { graphql, useStaticQuery } from "gatsby";

import YouTube from 'react-youtube';

const Youtube = ({medium}) => {
  const [playState, setPlayState] = useState(true);
  const yt = useRef(null);

  const exit = () => {
    setPlayState(false);
    /* Pause video */
    if(typeof document !== 'undefined') {
      const el = document.querySelector(".videoContainer iframe");
      if(el !== null) el.src = "";
    }
  }

  const playYoutube = (event) => {
    event.target.playVideo();
  }

  return <div onClick={exit} className={playState ? "youtube" : "d-none"}>
    <button className="youtube__exit" onClick={exit}>
      <img src={require("../../static/img/exit.png")} alt="exit" />
    </button>

    {medium.type === 1 ? (
      <YouTube
        width='600'
        height='400'
        videoId={medium.payload}
        containerClassName="videoContainer"
        onReady={e => playYoutube(e)}
      />
    ) : <img className="youtubeImg" src={require(`../../static/img/${medium.payload}`)} alt="portoflio-img" />}
  </div>
};

export default Youtube;