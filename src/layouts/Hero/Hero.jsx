import React from "react";
import Button from "../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import heroData from "../../assets/docs/hero.json";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>{heroData.greeting}</h1>
      <h2>{heroData.name}</h2>
      <h3>{heroData.subtitle}</h3>
      <p>{heroData.description}</p>

      <Button
        className="viewFormation"
        text={heroData.buttonText}
        task={() => navigate("/achievements")}
        rel="noreferrer"
      />
    </section>
  );
};

export default Hero;
