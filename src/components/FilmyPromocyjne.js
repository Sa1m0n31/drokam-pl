import React from "react";

import AboutUsSection from "./AboutUsSection";

const FilmyPromocyjne = () => {
  return (<main className="portfolioSubpage">
    <h2 className="portfolioSubpageHeader">
      Filmy promocyjne
    </h2>
    <div className="filmyPromocyjneTop">
      <iframe className="filmyPromocyjne__first" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

      <iframe className="filmyPromocyjne__second" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

      <iframe className="filmyPromocyjne__third" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

      <iframe className="filmyPromocyjne__fourth" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

      <iframe className="filmyPromocyjne__fifth" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>

    <AboutUsSection />

    <div className="filmyPromocyjneBottom">
      <iframe className="filmyPromocyjne__first" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe className="filmyPromocyjne__second" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
      <iframe className="filmyPromocyjne__third" src="https://www.youtube.com/embed/BXDYP9Bt0AE" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
    </main>);
}

export default FilmyPromocyjne;