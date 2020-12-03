import React from "react";

import { gsap } from 'gsap/all';
import AfterForm from "./AfterForm";

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: React.createRef(),
      formRef: React.createRef(),
      afterSubmitRef: React.createRef(),
      name: "",
      contact: "",
      msg: "",
      fotografiaReklamowa: true,
      filmyPromocyjne: false,
      imprezyOkolicznosciowe: false,
      rolnictwoPrecyzyjne: false,
      ok: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    loadReCaptcha("6LdR3_YZAAAAAGOo3v4ImKqI1v41niaBfgQkqja4");
    if(typeof document !== 'undefined') {

    }
  }

  verifyCallback(res) {
    if(res) {
      this.setState({
        ok: true
      });
    }
  }

  handleButton(e) {
    let prev;

    if(e.target === undefined) {
      switch(e) {
        case 'fotografiaReklamowa':
          prev = this.state.fotografiaReklamowa
          break;
        case 'filmyPromocyjne':
          prev = this.state.filmyPromocyjne;
          break;
        case 'imprezyOkolicznosciowe':
          prev = this.state.imprezyOkolicznosciowe;
          break;
        case 'rolnictwoPrecyzyjne':
          prev = this.state.rolnictwoPrecyzyjne;
          break;
        default:
          break;
      }
      this.setState({
        [e]: !prev
      });
    }
    else {
      e.preventDefault();
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
      });
    }
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const xhr = new XMLHttpRequest();
    const data = {
      nazwa: this.state.name,
      kontakt: this.state.contact,
      wiadomosc: this.state.msg,
      filmyPromocyjne: this.state.filmyPromocyjne,
      fotografiaReklamowa: this.state.fotografiaReklamowa,
      imprezyOkolicznosciowe: this.state.imprezyOkolicznosciowe,
      rolnictwoPrecyzyjne: this.state.rolnictwoPrecyzyjne
    };

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        if((typeof document !== 'undefined')&&(this.state.ok)) {
          const el = document.querySelector(".afterForm");
          gsap.fromTo(this.state.formRef.current, { x: 0 }, { x: -3000, duration: .7 })
            .then(() => {
              gsap.to(el, { opacity: 1, duration: .5 });
            });
        }
      } else {
        console.log("error");
      }
    };
    xhr.send(JSON.stringify(data));
  }

  render() {
    return (<div className="formContainer">
      <AfterForm />

        <section className="formSection" id="kontakt" ref={this.state.formRef}>
        <header className="formSection__header">
          <h2>Wpisz wymagane dane i wyślij formularz:</h2>
          <h3><span className="red">*</span> - pole wymagane</h3>
          <h3><span className="red">**</span> - wybierz jedno</h3>
        </header>
        <form className="formSection__main"
              action="https://formspree.io/f/mgeplqle"
              method="POST"
              onSubmit={(this.handleSubmit)}
        >
          <input ref={this.state.nameInput} className="form__name" type="text" name="name"
                 placeholder="Imie i nazwisko / Nazwa firmy *"
                 value={this.state.name}
                 onChange={(e) => this.handleChange(e)} />
          <input className="form__contact" type="text" name="contact"
                 placeholder="Numer telefonu / Adres email **"
                 value={this.state.contact}
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
                  <img onClick={() => this.handleButton("fotografiaReklamowa")} className={this.state.fotografiaReklamowa ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
                </button>
                Fotografia reklamowa
              </label>
            </div>
            <div className="form__usluga__item">
              <label>
                <button className={this.state.filmyPromocyjne ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                        name="filmyPromocyjne"
                        onClick={e => this.handleButton(e)}>
                  <img onClick={() => this.handleButton("filmyPromocyjne")} className={this.state.filmyPromocyjne ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
                </button>
                Filmy promocyjne
              </label>
            </div>
            <div className="form__usluga__item">
              <label>
                <button className={this.state.imprezyOkolicznosciowe ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                        name="imprezyOkolicznosciowe"
                        onClick={e => this.handleButton(e)}>
                  <img onClick={() => this.handleButton("imprezyOkolicznosciowe")} className={this.state.imprezyOkolicznosciowe ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
                </button>
                Imprezy okolicznościowe
              </label>
            </div>
            <div className="form__usluga__item">
              <label>
                <button className={this.state.rolnictwoPrecyzyjne ? "btn usluga__item__btn usluga__item__checked" : "btn usluga__item__btn"}
                        name="rolnictwoPrecyzyjne"
                        onClick={e => this.handleButton(e)}>
                  <img onClick={() => this.handleButton("rolnictwoPrecyzyjne")} className={this.state.rolnictwoPrecyzyjne ? "" : "d-none"} src={require("../../static/img/check.png")} alt="ok" />
                </button>
                Rolnictwo precyzyjne
              </label>
            </div>
          </div>

          <div className="recaptcha">
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
            <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
          </div>

          <ReCaptcha
            sitekey="6LdR3_YZAAAAAGOo3v4ImKqI1v41niaBfgQkqja4"
            render="implicit"
            verifyCallback={this.verifyCallback} />

          <button type="submit" className="btn btn--portfolio btn--form">
            Wyślij formularz
          </button>
        </form>
      </section>
      </div>);
  }

}