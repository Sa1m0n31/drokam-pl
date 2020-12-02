import React from "react";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import RolnictwoPrecyzyjne from "../components/RolnictwoPrecyzyjne"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Header title="Portfolio" />
      <RolnictwoPrecyzyjne />
      <Footer />
    </div>);
}
