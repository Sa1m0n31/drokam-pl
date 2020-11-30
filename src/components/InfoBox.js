import React from "react";

import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";

const InfoBox = ({title, p1, p2, p3}) => {

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

  return (<section className="infoBox" id="onas">
    <div className="infoBox__left">
      <img src={require("../../static/img/drokam-sygnet-2.png")} alt="drokam-sygnet-2" />
      <h2 className="left__header">
        {title}
      </h2>
      <div className="left__content">
        <p className="left__content__p">
          {p1}
        </p>
        <p className="left__content__p">
          {p2}
        </p>
        <p className="left__content__p">
          {p3}
        </p>
      </div>
    </div>
    <div className="infoBox__right">
      <Img className="right__img" fluid={data.aboutUs.childImageSharp.fluid} alt="drokam-o-nas" />
    </div>
  </section>);
}

export default InfoBox;