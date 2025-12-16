import React from "react";
import "../styles/pages/home.scss";

const Home = () => {
  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero">
        {/* Left Side: Text */}
        <section className="text-content">
          <h1>
            Hi, my name is <br />
            <span className="intro-name">Shamshad Ansari.</span>
          </h1>

          <p className="intro-description-title">
            I design and build thoughtful software that turns ideas into real
            products.
          </p>
          {/* CTA Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToWorks}>
              See My Works
            </button>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Right Side: Circular Image */}
        <div className="image-wrapper">
          <div className="profile-image">
            <img src="/assets/images/hero-image.jpeg" alt="Shamshad Ansari" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
