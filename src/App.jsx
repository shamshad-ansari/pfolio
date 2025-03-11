import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Header from "./components/header";
import Home from "./pages/home";
import Work from "./pages/works";
import Footer from "./components/footer";

import "./styles/global.scss";

function App() {
  const location = useLocation();

  return (
    <React.Fragment>
      <Header />
      <main className="page-container">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames={"page"}
            timeout={1000}
          >
            <div className="page">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/works" element={<Work />} />
                <Route path="/contact" element={<Work />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
