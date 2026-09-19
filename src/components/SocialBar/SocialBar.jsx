import "./SocialBar.css";
import GithubIcon from "../../icons/GithubIcon.jsx";
import InstagramIcon from "../../icons/InstagramIcon.jsx";
import AluraIcon from "../../icons/AluraIcon.jsx";
import LinkedinIcon from "../../icons/LinkedinIcon.jsx";

const SocialBar = () => {
  return (
    <div orientation="left" className="socialBar">
      <ul className="socialBar__list">
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://github.com/jsantos43"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://www.instagram.com/joaos.santos7"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://cursos.alura.com.br/user/joaosantos2007"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <AluraIcon className="socialBar__svg" />
          </a>
        </li>
        <li className="socialBar__element">
          <a
            className="socialBar__link"
            href="https://www.linkedin.com/in/joaosantos2007/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="socialBar__svg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
