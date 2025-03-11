import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <p>Contact</p>
        <h2>Wanna Work Togeher</h2>
        <a href="mailto:as.shamshadansari@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20would%20like%20to%20discuss...">
          <button>Click Here</button>
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul>
          <li>
            <a
              href="https://github.com/shamshad-ansari"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sh-ansari"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
