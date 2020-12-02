import React  from "react";

const AfterForm = () => {
  return (<section className="afterForm">
    <img src={require("../../static/img/ok.svg")} alt="ok" />
    <h2 className="afterForm__title">Formularz wysłany</h2>
    <p className="afterForm__text">
      W zależności od wybranej przez Ciebie formy kontaktu odpiszemy lub oddzwonimy najpóźniej w 24 godziny!
    </p>
  </section>);
}

export default AfterForm;