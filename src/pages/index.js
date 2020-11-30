import React from "react";
import Helmet from 'react-helmet';

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer"
import FrontContainer from "../components/FrontContainer";

export default function Home() {
  return (<>
    <Helmet>
      <title>DroKam - najlepsze filmy w sieci</title>
      <meta charSet="utf-8" />
    </Helmet>
    <div className="container">
      <LandingPage />
      <FrontContainer />
      <Footer />
  </div>
    </>);
}
