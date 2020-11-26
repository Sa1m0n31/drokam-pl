import React from "react";

const PortfolioPage = () => {
  return (<main className="portfolioPage">
    <p className="portfolioPage__p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/sygnet-dark.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Filmy promocyjne
      </h2>
      <div className="portfolioSection__content">

      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        Zobacz więcej
      </button>
    </section>
    <section className="portfolioSectionP filmyPromocyjne">
      <img src={require("../../static/img/sygnet-dark.png")} alt="drokam-portfolio" />
      <h2 className="portfolioSection__title">
        Filmy promocyjne
      </h2>
      <div className="portfolioSection__content">

      </div>
      <button className="btn btn--portfolio btn--zobaczWiecej">
        Zobacz więcej
      </button>
    </section>
  </main>);
}

export default PortfolioPage;