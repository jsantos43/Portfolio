import "./Footer.css";

import GithubIcon from "../../icons/GithubIcon.jsx";
import InstagramIcon from "../../icons/InstagramIcon.jsx";
import AluraIcon from "../../icons/AluraIcon.jsx";
import LinkedinIcon from "../../icons/LinkedinIcon.jsx";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <ul className="footer__social-list">
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://github.com/JoaoSantos2007"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://www.instagram.com/joaos.santos7"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://cursos.alura.com.br/user/joaosantos2007"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <AluraIcon className="footer__social-svg" />
            </a>
          </li>
          <li className="footer__social-element">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/joaosantos2007/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="footer__social-svg" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__inner">
        <a
          className="footer__link"
          href="https://github.com/jsantos43/Portfolio"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>Developed by João Pedro Tomaz dos Santos</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
