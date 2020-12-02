import React from "react";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import FilmyPromocyjne from "../components/FilmyPromocyjne";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header title="Portfolio" />
      <FilmyPromocyjne />
      <Footer />
    </div>);
}
