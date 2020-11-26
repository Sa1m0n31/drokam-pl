import React from "react";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import PortfolioPage from "../components/PortfolioPage";
import Footer from "../components/Footer";

export default function Home() {
  return (<div className="container">
    <Header title="Portfolio" />
    <PortfolioPage />
    <Footer />
  </div>);
}
