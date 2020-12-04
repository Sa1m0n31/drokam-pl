import React, { useEffect, useRef } from "react";

const Partners = ({id}) => {
  const slider = useRef(null);

  const scroll = (left) => {
    let n = 200;
    console.log("scroll");
    if(left) {
      console.log("left");
      slider.current.scrollBy({
        behavior: "smooth",
        left: -n
      });
    }
    else {
      slider.current.scrollBy({
        behavior: "smooth",
        left: n
      });
    }
  }

  return (<section ref={id} className="partnersSection">
      <header className="sectionHeader">
        <h2 className="sectionHeader__h">
          Zaufali nam
        </h2>
      </header>
      <main className="partners__content">
        {/*<img className="partnersBackground" src={require("../../static/img/drokam-partners.png")} alt="drokam-partnerzy-tlo" />*/}
        <div className="partners__content__arrow d-none">
          <img onClick={() => scroll(true)} src={require("../../static/img/prev.png")} alt="previous" />
        </div>
        <div ref={slider} className="partners__content__inside">
          <div className="partners__content__item">
            <img src={require("../../static/img/kuhn.png")} alt="kuhn" />
          </div>
          <div className="partners__content__item">
            <img src={require("../../static/img/kuhn.png")} alt="kuhn" />
          </div>
          <div className="partners__content__item">
            <img src={require("../../static/img/kuhn.png")} alt="kuhn" />
          </div>
          <div className="partners__content__item">
            <img src={require("../../static/img/kuhn.png")} alt="kuhn" />
          </div>
        </div>
        <div className="partners__content__arrow d-none">
          <img onClick={() => scroll(false)} src={require("../../static/img/next.png")} alt="next" />
        </div>
      </main>
  </section>);
}

export default Partners;