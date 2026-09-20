import TableElement from "../../components/TableElement/TableElement.jsx";
import courses from "../../data/courses.json";
import "./Achievements.css";
import PropTypes from "prop-types";

const Achievements = ({ menuMode }) => {
  const sortedCourses = [...courses].sort((a, b) => a.year - b.year);

  return (
    <main className={`achievements ${menuMode ? "main-disabled" : ""}`}>
      <h1 className="achievements__title">Learning &amp; Certifications</h1>
      <p className="achievements__subtitle">
        A chronological record of the courses, workshops, and certificates that
        have shaped my technical foundation.
      </p>

      <table className="achievements__table">
        <thead>
          <tr>
            <th className="achievements__table-year">Year</th>
            <th className="achievements__table-title">Course</th>
            <th className="achievements__table-school">Provider</th>
            <th className="achievements__table-link">Certificate</th>
          </tr>
        </thead>
        <tbody>
          {sortedCourses.map((course, index) => (
            <TableElement
              key={course.id}
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
