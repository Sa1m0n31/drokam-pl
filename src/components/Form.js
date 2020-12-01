import React from "react";

import { gsap } from 'gsap/all';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: React.createRef(),
      formRef: React.createRef(),
      afterSubmitRef: React.createRef(),
      name: "",
      company: "",
      msg: "",
      fotografiaReklamowa: true,
      filmyPromocyjne: false,
      imprezyOkolicznosciowe: false,
      rolnictwoPrecyzyjne: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    let prev;
    switch(e.target.name) {
      case "fotografiaReklamowa":
        prev = this.state.fotografiaReklamowa;
        break;
      case "filmyPromocyjne":
        prev = this.state.filmyPromocyjne;
        break;
      case "imprezyOkolicznosciowe":
        prev = this.state.imprezyOkolicznosciowe;
        break;
      case "rolnictwoPrecyzyjne":
        prev = this.state.rolnictwoPrecyzyjne;
        break;
      default:
        break;
    }

    this.setState({
      [e.target.name]: !prev
    }, () => {
      console.log(this.state);
    });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    /* Simulation - everything ok */
    console.log("submit");
    gsap.fromTo(this.state.formRef.current, { x: 0 }, { x: -3000, duration: 1 });
    gsap.fromTo(this.state.afterSubmitRef.current, { x: 0 }, { x: -3000, duration: 1 });
  }

  render() {
    return (<section className="formSection" id="kontakt" ref={this.state.formRef}>
      <header className="formSection__header">
        <h2>Wpisz wymagane dane i wyślij formularz:</h2>
        <h3><span className="red">*</span> - pole wymagane</h3>
        <h3><span className="red">**</span> - wybierz jedno</h3>
      </header>
      <form className="formSection__main">
        <input ref={this.state.nameInput} className="form__name" type="text" name="name"
               placeholder="Imie i nazwisko / Nazwa firmy *"
               value={this.state.name}
               onChange={(e) => this.handleChange(e)} />
        <input className="form__company" type="text" name="company"
               placeholder="Numer telefonu / Adres email **"
               value={this.state.company}
               onChange={(e) => this.handleChange(e)} />
        <textarea className="form__msg" name="msg"
                  placeholder="Wiadomość"
                  value={this.state.msg}
                  onChange={e => this.handleChange(e)} />

        <div className="form__usluga">
          <h4 className="form__usluga__header">Wybierz, która pozycja z oferty Cię interesuje:</h4>
          <div className="form__usluga__item">
            <label>
              <button className={this.state.fotografiaReklamowa ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                      name="fotografiaReklamowa"
                      onClick={e => this.handleButton(e)}>
                <img className={this.state.fotografiaReklamowa ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
              </button>
              Fotografia reklamowa
            </label>
          </div>
          <div className="form__usluga__item">
            <label>
              <button className={this.state.filmyPromocyjne ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                      name="filmyPromocyjne"
                      onClick={e => this.handleButton(e)}>
                <img className={this.state.filmyPromocyjne ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
              </button>
              Filmy promocyjne
            </label>
          </div>
          <div className="form__usluga__item">
            <label>
              <button className={this.state.imprezyOkolicznosciowe ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                      name="imprezyOkolicznosciowe"
                      onClick={e => this.handleButton(e)}>
                <img className={this.state.imprezyOkolicznosciowe ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
              </button>
              Imprezy okolicznościowe
            </label>
          </div>
          <div className="form__usluga__item">
            <label>
              <button className={this.state.rolnictwoPrecyzyjne ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                      name="rolnictwoPrecyzyjne"
                      onClick={e => this.handleButton(e)}>
                <img className={this.state.rolnictwoPrecyzyjne ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
              </button>
              Rolnictwo precyzyjne
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn--portfolio btn--form"
                onClick={e => this.handleSubmit(e)}>
          Wyślij formularz
        </button>
      </form>
      <div className="formAfterSubmit" ref={this.state.afterSubmitRef}>
        <h2>Dzięki!</h2>
      </div>
    </section>);
  }

}