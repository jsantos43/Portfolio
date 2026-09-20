import "./Navbar.css";
import { useState, useEffect } from "react";
import Logo from "../Logo/Logo.jsx";
import Button from "../Button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "../../icons/MenuIcon.jsx";
import CloseIcon from "../../icons/CloseIcon.jsx";
import PropTypes from "prop-types";

const Navbar = ({ menuMode, setMenuMode }) => {
  const [navbarClass, setNavbarClass] = useState("navbar");
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollYValue = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setNavbarClass("navbar"); // Classe padrão no topo da página
      } else if (currentScrollY > lastScrollYValue) {
        setNavbarClass("navbar navbar-hidden"); // Scroll para baixo
      } else if (currentScrollY < lastScrollYValue && !menuMode) {
        setNavbarClass("navbar navbar-scrolled"); // Scroll para cima
      }

      lastScrollYValue = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuMode]);

  const links = [
    { id: 1, name: "About", section: "about" },
    { id: 2, name: "Experience", section: "experience" },
    { id: 3, name: "Work", section: "projects" },
    { id: 4, name: "Contact", section: "contact" },
  ];

  const handleNavigation = (section) => {
    navigate("/");
    setMenuMode(false);
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  return (
    <header className={navbarClass}>
      <nav className="navbar__content">
        <div className="navbar__logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="navbar__links">
          <ol className="navbar__list">
            {links.map((link, index) => (
              <li className="navbar__item" key={link.id}>
                <p
                  className="navbar__link"
                  onClick={() => handleNavigation(link.section)}
                  style={{ transitionDelay: `${index * 10}ms` }}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ol>

          <Button text="Resume" href="/resume.pdf" rel="noopener noreferrer" />
        </div>

        <div className="navbar__menu">
          <aside
            className={`navbar__aside ${menuMode ? "navbar__aside-active" : ""}`}
          >
            <nav className="navbar__aside-content">
              <ol className="navbar__aside-list">
                {links.map((link, index) => (
                  <li className="navbar__aside-item" key={link.id}>
                    <p
                      className="navbar__aside-link"
                      onClick={() => handleNavigation(link.section)}
                      style={{ transitionDelay: `${index * 10}ms` }}
                    >
                      {link.name}
                    </p>
                  </li>
                ))}
              </ol>

              <Button
                text="Resume"
                href="/resume.pdf"
                rel="noopener noreferrer"
              />
            </nav>
          </aside>

          <button
            aria-label="Menu"
            className="navbar__menu-btn"
            onClick={() => setMenuMode((prev) => !prev)}
          >
            {!menuMode ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};
Navbar.propTypes = {
  menuMode: PropTypes.bool.isRequired,
  setMenuMode: PropTypes.func.isRequired,
};

export default Navbar;
