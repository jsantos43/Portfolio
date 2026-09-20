import "./TableElement.css";
import ExternalIcon from "../../icons/ExternalIcon.jsx";

import PropTypes from "prop-types";

const TableElement = ({ year, name, school, link, index }) => {
  return (
    <tr key={index} className="TableElement">
      <td className="TableElement__year">{year}</td>
      <td className="TableElement__title">{name}</td>
      <td className="TableElement__school">
        <span>{school}</span>
      </td>
      <td className="TableElement__links">
        <a
          className="TableElement__externalLink"
          href={link}
          aria-label={`View certificate for ${name}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ExternalIcon />
        </a>
      </td>
    </tr>
  );
};

TableElement.propTypes = {
  year: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TableElement;
