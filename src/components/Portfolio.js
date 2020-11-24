import React from "react"

const Portfolio = () => {
  return (<section className="portfolioSection">
        <header className="sectionHeader">
          <h2 className="sectionHeader__h">
              Ostatnie realizacje
          </h2>
        </header>
        <main className="portfolio__content">
          <img className="portfolio__content__item" src={require("../../static/img/drokam-portfolio-item.png")} alt="portfolio" />
          <img className="portfolio__content__item" src={require("../../static/img/drokam-portfolio-item.png")} alt="portfolio" />
          <img className="portfolio__content__item" src={require("../../static/img/drokam-portfolio-item.png")} alt="portfolio" />
        </main>
        <section className="portfolio__bottom">
          <button className="btn btn--portfolio">
            Sprawdź nasze portfolio
          </button>
        </section>
  </section>);
}

export default Portfolio;