import React from "react"

const Partners = () => {
  return (<section className="partnersSection">
      <header className="sectionHeader">
        <h2 className="sectionHeader__h">
          Zaufali nam
        </h2>
      </header>
      <main className="partners__content">
        <div className="partners__content__arrow">
          <img src={require("../../static/img/previous.png")} alt="previous" />
        </div>
        <div className="partners__content__inside">
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
          <div className="partners__content__item">
            <img src={require("../../static/img/kuhn.png")} alt="kuhn" />
          </div>
        </div>
        <div className="partners__content__arrow">
          <img src={require("../../static/img/next.png")} alt="next" />
        </div>
      </main>
  </section>);
}

export default Partners;