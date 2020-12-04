import React, { useEffect, useRef } from "react";

import InfoBox from "./InfoBox";
import Portfolio from "../components/Portfolio";
import Partners from "../components/Partners";
import Form from "./Form";

import { gsap, ScrollTrigger } from 'gsap/all';

const FrontContainer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const frontContainer = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);
  const four = useRef(null);
  const five = useRef(null);
  const six = useRef(null);

  useEffect(() => {
    if((typeof document !== 'undefined')&&(typeof window !== 'undefined')) {
      window.addEventListener("scroll", () => {
        console.log(window.pageYOffset);
        if(window.pageYOffset > 200) {
          document.querySelector(".moveUpBtn").style.opacity = ".8";
        }
        else {
          document.querySelector(".moveUpBtn").style.opacity = "0";
        }
      });

      document.querySelector('.moveUpBtn').addEventListener("click", () => {
        document.querySelector(".landingPage").scrollIntoView({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });

      gsap.fromTo(one.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
        trigger: "#num1",
          start: "top 80%"
        }});
      gsap.fromTo(two.current, { opacity: 0 }, { opacity: 1, duration: .5, scrollTrigger: {
          trigger: ".portfolioSection",
          start: "top 80%"
        }});
      gsap.fromTo(three.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
          trigger: "#num2",
          start: "top 80%"
        }});
      gsap.fromTo(four.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
          trigger: ".partnersSection",
          start: "top 80%"
        }});
      gsap.fromTo(five.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
          trigger: "#num3",
          start: "top 80%"
        }});
      gsap.fromTo(six.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: .5, scrollTrigger: {
          trigger: ".formSection",
          start: "top 80%"
        }});
    }
  }, []);

  return (<main className="frontContainer" ref={frontContainer}>
    <InfoBox
      id={one}
      title="Jesteśmy młodymi kreatywnymi ludźmi, dla których film i fotografia to sposób na życie!"
      p1="Od 5 lat wprowadzamy do naszego portfolio coraz to nowsze projekty oraz współprace z firmami."
      p2="Podczas tworzenia każdego projektu sugerujemy się indywidualnymi potrzebami klienta oraz dostarczeniem materiałów najwyższej jakości."
      p3="Wszystkie fotografie oraz filmy umieszczone na stronie to tylko i wyłącznie nasze dzieła."
      button={false}
      img={1}
    />
    <Portfolio id={two} />
    <InfoBox
      id={three}
      title="Szeroki wachlarz możliwości"
      p1="Naszym obiektywem obejmujemy dosłownie wszystko, co tylko sobie wymarzysz..."
      button={true}
      img={2}

    />
    <Partners id={four} />
    <InfoBox
      id={five}
      title="Zainteresowany? Skontaktuj się z nami!"
      p1="Wypełnij poniższy formularz i wyślij do nas swoje zapytanie dotyczące oferowanych przez nas usług."
      p2="Odezwiemy się do Ciebie najszybciej jak to możliwe i ustalimy szczegóły dotyczące ewentualnej współpracy."
      button={false}
      img={3}
    />
    <Form id={six} />
  </main>);
}

export default FrontContainer;