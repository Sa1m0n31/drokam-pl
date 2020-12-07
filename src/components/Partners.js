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
        <div className="partners__content__arrow d-none">
          <img onClick={() => scroll(true)} src={require("../../static/img/prev.png")} alt="previous" />
        </div>
        <div ref={slider} className="partners__content__inside">
          <div className="partners__content__item">
            <a href="https://www.kuhn.com.pl/" rel="noreferrer" target="_blank">
                <img src={require("../../static/img/drokam-partnerzy1.webp")} alt="kuhn" />
            </a>
          </div>
          <div className="partners__content__item">
           <a href="http://www.krukowiak.com.pl/" rel="noreferrer" target="_blank">
             <img src={require("../../static/img/drokam-partnerzy4.webp")} alt="krukowiak" />
           </a>
          </div>
          <div className="partners__content__item">
            <a href="http://www.pomltd.com.pl/" rel="noreferrer" target='_blank'>
              <img src={require("../../static/img/drokam-partnerzy3.webp")} alt="pom-brodnica" />
            </a>
          </div>
          <div className="partners__content__item">
            <a href="https://www.vaderstad.com/pl/" rel="noreferrer" target="_blank">
              <img src={require("../../static/img/drokam-partnerzy2.webp")} alt="vaderstad" />
            </a>
          </div>
        </div>
        <div className="partners__content__arrow d-none">
          <img onClick={() => scroll(false)} src={require("../../static/img/next.png")} alt="next" />
        </div>
      </main>
  </section>);
}

export default Partners;