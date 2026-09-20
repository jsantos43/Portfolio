import Button from "../../components/Button/Button.jsx";
import "./Contact.css";
import React from "react";
import contactData from "../../data/contact.json";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__overline">{contactData.overline}</h2>
      <h2 className="contact__title">{contactData.title}</h2>
      <p>{contactData.text}</p>

      <Button text={contactData.buttonText} href={contactData.link} />
    </section>
  );
};

export default Contact;
