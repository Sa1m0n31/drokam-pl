import React, { useEffect, useState } from "react";
import { enableScroll } from "../helpers/enableScroll";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import YouTube from 'react-youtube';

const Youtube = ({medium}) => {
  const [playState, setPlayState] = useState(true);
  let data = useStaticQuery(graphql`
      query Youtube {
          img: file(relativePath: { eq: "drokam-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 1300, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

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

  return <div className={playState ? "youtube" : "d-none"}>
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
    ) : <Img className="youtubeImg" fluid={data.img.childImageSharp.fluid} alt="drokam-portfolio" />}
  </div>
};

export default Youtube;