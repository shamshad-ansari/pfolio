import React, { useState, useEffect } from "react";
import "../styles/pages/header.scss";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "contact"];

      // 1. Logic for Active Section Spy
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }

      // 2. NEW: Logic for Header Background/Shadow
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    // Dynamically add the "scrolled" class
    <header className={isScrolled ? "scrolled" : ""}>
      <nav className="logo">
        <a onClick={() => scrollToSection("home")}>Shamshad Ansari</a>
      </nav>
      <nav className="home">
        <ul>
          <li>
            <a
              onClick={() => scrollToSection("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("works")}
              className={activeSection === "works" ? "active" : ""}
            >
              Works
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
