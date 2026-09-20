import "./FeaturedCard.css";
import GithubIcon from "../../icons/GithubIcon.jsx";
import ExternalIcon from "../../icons/ExternalIcon.jsx";
import ImageOverlay from "../../animations/ImageOverlay/ImageOverlay";
import PropTypes from "prop-types";

const FeaturedCard = ({ project, index }) => {
  return (
    <li className="featuredCard">
      <div className="featuredCard__content">
        <div>
          <p className="featuredCard__overline">Featured Project</p>
          <h3 className="featuredCard__title">
            <a
              href={project.externalLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.name}
            </a>
          </h3>
        </div>

        <div className="featuredCard__description">
          <p>{project.description}</p>
        </div>

        <ul className="featuredCard__techList">
          {project.techList.map((tech, techIndex) => (
            <li key={`featured-${index}-tech-${techIndex}`}>{tech}</li>
          ))}
        </ul>

        <div className="featuredCard__links">
          <a
            href={project.github}
            aria-label="GitHub Link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
          <a
            href={project.externalLink}
            aria-label="External Link"
            className="external"
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="featuredCard__image">
        <ImageOverlay
          href={project.externalLink}
          src={new URL(`../../assets/images/${project.img}`, import.meta.url).href}
          width="580px"
          height="360px"
        />
      </div>
    </li>
  );
};
FeaturedCard.propTypes = {
  project: PropTypes.shape({
    externalLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techList: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FeaturedCard;
