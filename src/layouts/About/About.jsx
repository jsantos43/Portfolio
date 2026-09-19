import "./About.css";
import myPhoto from "../../assets/images/me.png";
import aboutData from "../../assets/docs/about.json";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section__header">
        <p className="section__number">01.</p>
        <h2 className="section__title">About Me</h2>
        <hr className="section__spacer" />
      </div>

      <div className="about__info">
        <div className="about__texts">
          <div>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p>{aboutData.recentTechnologiesIntro}</p>
          </div>
          <ul className="about__skills">
            {aboutData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="about__image">
          <a href="https://github.com/JoaoSantos2007">
            <img src={myPhoto} alt="My photo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
