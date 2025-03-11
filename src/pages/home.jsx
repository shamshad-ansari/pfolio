import React, { Component } from "react";
import Header from "../components/header";
import "../styles/pages/home.scss";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div className="hero-container">
          <div className="hero">
            <section>
              <p className="intro-text">
                Hi, my name is
                <br />
                <span className="intro-name">Shamshad Ansari.</span>
              </p>
              <p className="intro-description-title">
                I build things for the web.
              </p>
            </section>
            <div className="image">
              <img src="/assets/images/mimoji.png" alt="Mimoji" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
