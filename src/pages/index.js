import React from "react";
import Helmet from 'react-helmet';

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import LandingPage from "../components/LandingPage";
import AboutUsSection from "../components/AboutUsSection";
import Portfolio from "../components/Portfolio";
import Partners from "../components/Partners";
import Footer from "../components/Footer"

export default function Home() {
  return (<>
    <Helmet>
      <title>DroKam - najlepsze filmy w sieci</title>
      <meta charSet="utf-8" />
    </Helmet>
    <div className="container">
      <LandingPage />
      <AboutUsSection />
      <Portfolio />
      <Partners />
      <Footer />
  </div>
    </>);
}
