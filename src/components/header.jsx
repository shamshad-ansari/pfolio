import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/header.scss";

class Header extends Component {
  render() {
    return (
      <head>
        <nav className="logo">
          <Link to="/">Shamshad Ansari</Link>
        </nav>
        <nav className="home">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <a href="mailto:as.shamshadansari@gmail.com?subject=Let's%20Connect&body=Hi%20there!%20I%20would%20like%20to%20discuss...">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </head>
    );
  }
}

export default Header;
