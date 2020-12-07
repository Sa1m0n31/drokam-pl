import React, { useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";

import Img from 'gatsby-image';
import moveUpBtnHandle from "../helpers/moveUpBtn"

const FotografieReklamowe = () => {
  useEffect(() => {
    moveUpBtnHandle();
  }, []);

  const data = useStaticQuery(graphql`
      query FotografieReklamoweQuery {
          img1: file(relativePath: { eq: "drokam-2.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img2: file(relativePath: { eq: "drokam-12.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img3: file(relativePath: { eq: "drokam-11.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img4: file(relativePath: { eq: "drokam-10.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img5: file(relativePath: { eq: "drokam-8.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img6: file(relativePath: { eq: "drokam-6.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img7: file(relativePath: { eq: "drokam-7.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img8: file(relativePath: { eq: "drokam-4.webp" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return <main className="portfolioSubpage">
    <main className="portfolioSubpage__fotografieReklamowe">
        <div className="fotografieReklamowe__firstRow">
            <Img className="firstRow__img" fluid={data.img1.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-1" />
            <Img className="firstRow__img" fluid={data.img2.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-2" />
        </div>
      <div className="fotografieReklamowe__secondRow">
        <Img className="secondRow__img" fluid={data.img3.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-3" />
        <Img className="secondRow__img" fluid={data.img4.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-4" />
        <Img className="secondRow__img" fluid={data.img5.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-5" />
      </div>
      <div className="fotografieReklamowe__thirdRow">
        <div className="thirdRow__a">
          <Img className="thirdRow__img" fluid={data.img6.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-6" />
        </div>
        <div className="thirdRow__b">
          <Img className="thirdRow__img" fluid={data.img7.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-7" />
          <Img className="thirdRow__img" fluid={data.img8.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-8" />
        </div>
      </div>
    </main>
  </main>
}

export default FotografieReklamowe;