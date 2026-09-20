import "./Featured.css";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import featured from "../../data/featured.json";

const Featured = () => {
  return (
    <section id="projects" className="featured">
      <div className="section__header">
        <p className="section__number">03.</p>
        <h2 className="section__title">Some Things I&apos;ve built</h2>
        <hr className="section__spacer" />
      </div>

      <ul className="featured__list">
        {featured.map((project, index) => (
          <FeaturedCard
            key={`featured-${index}`}
            project={project}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default Featured;
