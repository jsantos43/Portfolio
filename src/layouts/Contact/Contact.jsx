import Button from "../../components/Button/Button.jsx";
import "./Contact.css";
import React from "react";
import contactData from "../../assets/docs/contact.json";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__overline">{contactData.overline}</h2>
      <h2 className="contact__title">{contactData.title}</h2>
      <p>{contactData.text}</p>

      <Button
        text={contactData.buttonText}
        href="mailto:joao.santos.2007sp@gmail.com"
      />
    </section>
  );
};

export default Contact;
