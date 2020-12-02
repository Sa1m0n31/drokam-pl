import React from "react";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ImprezyOkolicznosciowe from "../components/ImprezyOkolicznosciowe";

export default function Home() {
  return (
    <div className="container">
      <Header title="Portfolio" />
      <ImprezyOkolicznosciowe />
      <Footer />
    </div>);
}
