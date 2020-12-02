import React, { useEffect, useState } from "react";
import { enableScroll } from "../helpers/enableScroll";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

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
    enableScroll();
  }

  return <div className={playState ? "youtube" : "d-none"}>
    <button className="youtube__exit" onClick={exit}>
      x
    </button>
    {medium.type === 1 ? medium.payload : <Img className="youtubeImg" fluid={data.img.childImageSharp.fluid} alt="drokam-portfolio" /> }
  </div>
};

export default Youtube;