import { useState } from "react";
import "./Experience.css";
import experiences from "../../assets/docs/experiences.json";
import ExperiencePanel from "../../components/ExperiencePanel/ExperiencePanel";
import ExperienceNav from "../../components/ExperienceNav/ExperienceNav";

const Experience = () => {
  const [selected, setSelected] = useState(0);

  const ChangeSelected = (i) => {
    setSelected(i);
  };

  return (
    <section id="experience" className="experience">
      <div className="section__header">
        <p className="section__number">02.</p>
        <h2 className="section__title">View my Sites</h2>
        <hr className="section__spacer" />
      </div>

      <div className="experience__inner">
        <ExperienceNav
          key="experience-nav"
          experiences={experiences}
          selected={selected}
          ChangeSelected={ChangeSelected}
        />

        <div className="experience__texts">
          {experiences.map(
            (experience, index) =>
              selected === index && (
                <ExperiencePanel
                  key={`experience-panel-${index}`}
                  experience={experience}
                  index={index}
                />
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
