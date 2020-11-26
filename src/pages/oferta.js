import React from "react";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import Oferta from "../components/Oferta"
import Footer from "../components/Footer";

export default function Home() {
  return (<div className="container">
    <Header title="Oferta" />
    <Oferta />
    <Footer />
  </div>);
}
