import TableElement from "../../components/TableElement/TableElement.jsx";
import courses from "../../data/courses.json";
import "./Achievements.css";
import PropTypes from "prop-types";

const Achievements = ({ menuMode }) => {
  return (
    <main className={`achievements ${menuMode ? "main-disabled" : ""}`}>
      <h1 className="achievements__title">Achievements</h1>
      <p className="achievements__subtitle">
        A big list of things I’ve worked on
      </p>

      <table className="achievements__table">
        <thead>
          <tr>
            <th className="achievements__table-year">Year</th>
            <th className="achievements__table-title">Title</th>
            <th className="achievements__table-school">School</th>
            <th className="achievements__table-link">Link</th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course, index) => (
              <TableElement
                key={index}
                year={course.year}
                name={course.name}
                school={course.school}
                link={course.link}
                index={index}
              />
            ))}
        </tbody>
      </table>
    </main>
  );
};
Achievements.propTypes = {
  menuMode: PropTypes.bool.isRequired,
};

export default Achievements;
