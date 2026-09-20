import "./Projects.css";
import { useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import Button from "../../components/Button/Button.jsx";
import projects from "../../data/projects.json";

const Projects = () => {
  const [viewFull, setViewFull] = useState(false);

  return (
    <section className="projects">
      <h2 className="projects__title">Other Noteworthy Projects</h2>

      <ul className="projects__list">
        {projects.map(
          (project, index) =>
            (viewFull === true || index + 1 <= 6) && (
              <ProjectCard
                key={`project-${index}`}
                project={project}
                index={index}
              />
            ),
        )}
      </ul>

      <Button
        text={viewFull ? "Show Less" : "Show More"}
        task={() => setViewFull(!viewFull)}
      />
    </section>
  );
};

export default Projects;
