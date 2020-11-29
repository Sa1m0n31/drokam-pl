import React from "react";

import Img from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";

const AboutUsSection = () => {

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

  return (<section className="aboutUsSection" id="onas">
    <div className="aboutUsSection__left">
      <img src={require("../../static/img/drokam-sygnet-2.png")} alt="drokam-sygnet-2" />
      <h2 className="left__header">
        Jesteśmy młodymi kreatywnymi ludźmi,<br/>dla których film i fotografia to sposób na życie!
      </h2>
      <div className="left__content">
        <p className="left__content__p">
          Od 5 lat wprowadzamy do naszego portfolio coraz to nowsze projekty oraz współprace z firmami.
        </p>
        <p className="left__content__p">
          Podczas tworzenia każdego projektu sugerujemy się indywidualnymi potrzebami klienta oraz dostarczeniem materiałów najwyższej jakości.
        </p>
        <p className="left__content__p">
          Wszystkie fotografie oraz filmy umieszczone na stronie to tylko i wyłącznie nasze dzieła.
        </p>
      </div>
    </div>
    <div className="aboutUsSection__right">
      <Img className="right__img" fluid={data.aboutUs.childImageSharp.fluid} alt="drokam-o-nas" />
    </div>
  </section>);
}

export default AboutUsSection;