// src/App.jsx
import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Work from "./pages/works";
import Footer from "./components/footer";
import "./styles/global.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="page-container">
        {/* 1. HOME SECTION */}
        <section id="home">
          <Home />
        </section>

        {/* 2. WORK SECTION */}
        <section id="works">
          <Work />
        </section>

        {/* 3. CONTACT SECTION (Footer) */}
        <section id="contact">
          <Footer />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
