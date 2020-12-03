import React from "react";

import { Link } from 'gatsby';

const Footer = () => {
  return (<footer className="footer">
    <div className="footer__left">
        <img className="footer__left__logo" src={require("../../static/img/logo-footer.png")} alt="drokam-logo" />
        <section className="left__daneKontaktowe">
          <header className="daneKontaktowe__header">
            <h3 className="daneKontaktowe__header__h">Dane kontaktowe:</h3>
          </header>
          <main className="daneKontaktowe__content">
            <div className="daneKontaktowe__content__item">
              <img className="kontaktImg" src={require("../../static/img/osoba.png")} alt="drokam-kontakt" />
              <h4 className="kontaktItem">Michał Kamiński</h4>
              <h4 className="kontaktItem">Jakub Drozd</h4>
            </div>
            <div className="daneKontaktowe__content__item">
              <img className="kontaktImg" src={require("../../static/img/phone.png")} alt="drokam-kontakt-telefon" />
              <h4 className="kontaktItem">123 456 789</h4>
              <h4 className="kontaktItem">123 456 789</h4>
            </div>
            <div className="daneKontaktowe__content__item">
              <img className="kontaktImg" src={require("../../static/img/mail.png")} alt="drokam-kontakt-mail" />
              <h4 className="kontaktItem">drokam.studio@gmail.com</h4>
            </div>
          </main>
        </section>
    </div>
    <div className="footer__right">
        <div className="right__socialMedia">
          <a className="socialMedia__item" href="https://facebook.com" rel="noreferrer" target="_blank">
            <img src={require("../../static/img/facebook.png")} alt="facebook" />
          </a>
          <a className="socialMedia__item" href="https://facebook.com" rel="noreferrer" target="_blank">
            <img src={require("../../static/img/instagram.png")} alt="instagram" />
          </a>
          <a className="socialMedia__item" href="https://facebook.com" rel="noreferrer" target="_blank">
            <img src={require("../../static/img/youtube.png")} alt="youtube" />
          </a>
        </div>
        <div className="right__offer">
            <ul className="right__offer__list">
              <li className="right__offer__list__item">
                <Link to="/filmy-promocyjne">
                  Filmy promocyjne
                </Link>
              </li>
              <li className="right__offer__list__item">
                <Link to="/fotografie-reklamowe">
                  Fotografie reklamowe
                </Link>
              </li>
              <li className="right__offer__list__item">
                <Link to="/imprezy-okolicznosciowe">
                  Imprezy okolicznościowe
                </Link>
              </li>
              <li className="right__offer__list__item">
                <Link to="/rolnictwo-precyzyjne">
                  Rolnictwo precyzyjne
                </Link>
              </li>
            </ul>
        </div>
    </div>
    <div className="footer__bottom">
      <h6 className="footer__bottom__h">
        &copy; DROKAM 2020 Projekt i realizacja <a href="https://skylo.pl" target="_blank" rel="noreferrer">Skylo.pl</a>
      </h6>
    </div>
  </footer>);
}

export default Footer;