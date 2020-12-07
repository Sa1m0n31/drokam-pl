import React from "react";
import Helmet from 'react-helmet';

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import Header from "../components/Header";
import Footer from "../components/Footer";
import ImprezyOkolicznosciowe from "../components/ImprezyOkolicznosciowe";

export default function Home() {
  return (<>
    <Helmet htmlAttributes={{lang: "pl"}}>
      <title>DroKam - najlepsze filmy w sieci</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Drokam - filmy z drona, fotografie reklamowe, rolnictwo precyzyjne" />
      <link rel="icon" type="icon/png" href={require("../../static/img/drokam-sygnet-2.png")} sizes="16x16" />
      <meta name="theme-color" content="#DB2B39"/>
      <meta name="msapplication-navbutton-color" content="#DB2B39"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="#DB2B39" />
    </Helmet>
    <div className="container">
      <Header title="Imprezy okolicznościowe" mark={2}/>
      <ImprezyOkolicznosciowe />
      <Footer />
    </div>
    </>);
}
