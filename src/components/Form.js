import React from "react";

import { gsap } from 'gsap/all';
import AfterForm from "./AfterForm";

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: React.createRef(),
      nameInput: React.createRef(),
      contactInput: React.createRef(),
      formRef: React.createRef(),
      afterSubmitRef: React.createRef(),
      name: "",
      contact: "",
      msg: "",
      fotografiaReklamowa: true,
      filmyPromocyjne: false,
      imprezyOkolicznosciowe: false,
      rolnictwoPrecyzyjne: false,
      error: 5
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount() {
    loadReCaptcha("6LdR3_YZAAAAAGOo3v4ImKqI1v41niaBfgQkqja4");
  }

  verifyCallback(res) {
    if(res) {
      this.setState({
        error: 0
      });
    }
    else {
      this.setState({
        error: 4
      });
    }
  }

  handleError(n) {
    if((n === 1)||(n === 2)||(n === 3)) {
      this.state.container.current.scrollIntoView({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }

    if(n === 1) {
      this.state.nameInput.current.style.border = "2px solid red";
      this.state.nameInput.current.style.animation = "shake .5s";
      this.state.contactInput.current.style.border = "none";
    }
    else if(n === 2) {
      this.state.contactInput.current.style.border = "2px solid red";
      this.state.contactInput.current.style.animation = "shake .5s";
      this.state.nameInput.current.style.border = "none";
    }
    else if(n === 3) {
      this.state.nameInput.current.style.border = "2px solid red";
      this.state.nameInput.current.style.animation = "shake .5s";
      this.state.contactInput.current.style.border = "2px solid red";
      this.state.contactInput.current.style.animation = "shake .5s";
    }
    else {
      this.state.nameInput.current.style.border = "none";
      this.state.contactInput.current.style.border = "none";
    }
    setTimeout(() => {
      this.state.nameInput.current.style.animation = "none";
      this.state.contactInput.current.style.animation = "none";
    }, 500);
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

  async handleSubmit(e) {
    e.preventDefault();

    /* Validation */
    // Name
    if(this.state.name === '') {
      await this.setState({
        error: 1
      });
    }
    else {
      if(this.state.error === 3) {
        await this.setState({
          error: 2
        });
      }
    }

    // Contact
    if(this.state.contact === '') {
      if(this.state.error === 1) {
        await this.setState({
          error: 3
        });
      }
      else if(this.state.error === 2) {
        await this.setState({
          error: 2
        });
      }
    }
    else {
      if(this.state.error === 2) {
        await this.setState({
          error: 0
        });
      }
      else if(this.state.error === 3) {
        await this.setState({
          error: 1
        });
      }
    }
    await this.handleError(this.state.error);

    if(this.state.error === 0) {
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

      xhr.open("POST", "https://formspree.io/f/mgeplqle");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          if((typeof document !== 'undefined')&&(this.state.error === 0)) {
            const el = document.querySelector(".afterForm");
            gsap.fromTo(this.state.formRef.current, { x: 0 }, { x: -3000, duration: .7 })
              .then(() => {
                gsap.to(el, { opacity: 1, duration: .5 });
                gsap.set(this.state.container.current, { height: "700px" });
                gsap.set(this.state.formRef.current, { display: "none" });
                this.state.container.current.scrollIntoView({
                  top: 0,
                  left: 0
                });
              });
          }
        } else {
          console.log("error");
        }
      };
      xhr.send(JSON.stringify(data));
    }
  }

  render() {
    return (<div className="formContainer" ref={this.state.container}>
      <AfterForm />

        <section className="formSection" id="kontakt" ref={this.state.formRef}>
        <header className="formSection__header">
          <h2>Wpisz wymagane dane i wyślij formularz:</h2>
          <h3><span className="red">*</span> - pole wymagane</h3>
        </header>
        <form className="formSection__main"
              action="https://formspree.io/f/mgeplqle"
              method="POST"
              onSubmit={this.handleSubmit}
        >
          <input ref={this.state.nameInput} className="form__name" type="text" name="name"
                 placeholder="Imie i nazwisko / Nazwa firmy *"
                 value={this.state.name}
                 onChange={(e) => this.handleChange(e)} />
          <input ref={this.state.contactInput} className="form__contact" type="text" name="contact"
                 placeholder="Numer telefonu / Adres email *"
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