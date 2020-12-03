import React, { useEffect, useRef } from "react";

import InfoBox from "./InfoBox";
import Portfolio from "../components/Portfolio";
import Partners from "../components/Partners";
import Form from "./Form";

import { gsap } from 'gsap/all';

const FrontContainer = () => {
  const frontContainer = useRef(null);

  const handleScroll = () => {
    if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
      const footer = document.querySelector(".footer");
      const landing = document.querySelector(".landingPage");
    }
  };

  return (<main className="frontContainer" ref={frontContainer} onWheel={handleScroll}>
    <InfoBox
      title="Jesteśmy młodymi kreatywnymi ludźmi, dla których film i fotografia to sposób na życie!"
      p1="Od 5 lat wprowadzamy do naszego portfolio coraz to nowsze projekty oraz współprace z firmami."
      p2="Podczas tworzenia każdego projektu sugerujemy się indywidualnymi potrzebami klienta oraz dostarczeniem materiałów najwyższej jakości."
      p3="Wszystkie fotografie oraz filmy umieszczone na stronie to tylko i wyłącznie nasze dzieła."
      button={false}
      img={1}
    />
    <Portfolio />
    <InfoBox
      title="Szeroki wachlarz możliwości"
      p1="Naszym obiektywem obejmujemy dosłownie wszystko, co tylko sobie wymarzysz..."
      button={true}
      img={2}
    />
    <Partners />
    <InfoBox
      title="Zainteresowany? Skontaktuj się z nami!"
      p1="Wypełnij poniższy formularz i wyślij do nas swoje zapytanie dotyczące oferowanych przez nas usług."
      p2="Odezwiemy się do Ciebie najszybciej jak to możliwe i ustalimy szczegóły dotyczące ewentualnej współpracy."
      button={false}
      img={3}
    />
    <Form />
  </main>);
}

export default FrontContainer;