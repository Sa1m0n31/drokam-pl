import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Img from 'gatsby-image';

const FotografieReklamowe = () => {
  const data = useStaticQuery(graphql`
      query FotografieReklamoweQuery {
          img1: file(relativePath: { eq: "drokam-1.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img2: file(relativePath: { eq: "drokam-2.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img3: file(relativePath: { eq: "drokam-3.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img4: file(relativePath: { eq: "drokam-4.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          img5: file(relativePath: { eq: "drokam-5.png" }) {
              childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `);

  return <main className="portfolioSubpage">
    <h2 className="portfolioSubpageHeader">
      Fotografie reklamowe
    </h2>
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
          <Img className="thirdRow__img" fluid={data.img1.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-6" />
        </div>
        <div className="thirdRow__b">
          <Img className="thirdRow__img" fluid={data.img4.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-7" />
          <Img className="thirdRow__img" fluid={data.img3.childImageSharp.fluid} alt="drokam-fotografie-reklamowe-8" />
        </div>
      </div>
    </main>
  </main>
}

export default FotografieReklamowe;