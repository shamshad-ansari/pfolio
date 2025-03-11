import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/pages/workTogether.scss";

class About extends Component {
  render() {
    return (
      <div className="page">
        <section>
          <div className="about-text">
            <h2>Wanna Work Together?</h2>
            <p>
              From simple pages to complex applications, I craft digital
              solutions that are tailored to your needs,
            </p>
            <p> with a focus on clean code and exceptional user experiences.</p>
          </div>
          <div className="button">
            <button>Get in Touch</button>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
