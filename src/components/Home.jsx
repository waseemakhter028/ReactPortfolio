import { useEffect, useRef } from "react";
import pdf from "../pdf/WASEEM_AKHTER_RESUME.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const typedStrings = [
  "Welcome to my profile",
  "My Name is Waseem Akhter",
  "I'm full stack developer",
  "Tech Stack (React JS, Node JS, Express Js, Mongo DB, Redux, AWS, Python, Generative AI (GenAI), Open AI, RAG, LLMs, Vector DB)",
];

const longestString = typedStrings.reduce((a, b) => (b.length > a.length ? b : a));

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typedRef.current.textContent = typedStrings[1];
      return;
    }

    const options = {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <div className="typed_wrap">
          <div className="typed_ghost" aria-hidden="true">
            {longestString}|
          </div>
          <h1>
            <span className="visually-hidden">
              Waseem Akhter, Full Stack Developer
            </span>
            <span ref={typedRef} aria-hidden="true"></span>
          </h1>
        </div>

        <a
          href={pdf}
          download="Waseem_Akhter_Resume.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img
            src={`/assets/${hero.imgSrc}`}
            alt="Illustration of Waseem Akhter working on a laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
