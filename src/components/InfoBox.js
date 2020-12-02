import React from "react";

import Img from 'gatsby-image';
import { graphql, useStaticQuery, Link } from "gatsby";

const InfoBox = ({title, p1, p2, p3, button, background}) => {

  const data = useStaticQuery(graphql`
      query AbousUsSectionQuery {
          aboutUs: file(relativePath: { eq: "drokam-about-us.png" }) {
              childImageSharp {
                  fluid(maxWidth: 701, maxHeight: 393) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return (<section className={background ? "infoBox section--infobox" : "infoBox"} id="onas">
    <div className="infoBox__left">
      <img className="infoBox__sygnet" src={require("../../static/img/drokam-sygnet.png")} alt="drokam-sygnet-2" />
      <h2 className={!button ? "left__header" : "left__header header--infobox"}>
        {title}
      </h2>
      <div className="left__content">
        <p className={!button ? "left__content__p" : "left__content__p p--infobox"}>
          {p1}
        </p>
        {!button ? (<>
            <p className="left__content__p">
              {p2}
            </p>
          <p className="left__content__p">
            {p3}
          </p>
        </>) : (<button className="btn--portfolio btn--infobox">
          <Link to="/oferta">
            Zapoznaj się z ofertą
          </Link>
        </button>)}
      </div>
    </div>
    <div className="infoBox__right">
      <Img className="right__img" fluid={data.aboutUs.childImageSharp.fluid} alt="drokam-o-nas" />
    </div>
  </section>);
}

export default InfoBox;