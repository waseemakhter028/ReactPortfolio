import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="container contact mt-5" id="contact">
      <h2 className="section_title h1">CONTACT ME</h2>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a
          href="https://www.linkedin.com/in/waseem-akhter-5202473ab"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
          aria-label="LinkedIn profile (opens in a new tab)"
        >
          <CiLinkedin className="icons" aria-hidden="true" />
        </a>
        <a
          href="https://github.com/waseemakhter028"
          target="_blank"
          rel="noopener noreferrer"
          className="items"
          aria-label="GitHub profile (opens in a new tab)"
        >
          <FaGithubSquare className="icons" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
