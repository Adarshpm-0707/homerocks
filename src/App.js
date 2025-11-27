import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GetMeasurement from "./pages/GetMeasurement";

import homeVideo from "./assets/videos/background.mp4";  // Home video
     // Optional poster (small)

import "./styles/AppBackground.css";

function BackgroundLayer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <>
        <video
          className="app-bg-video"
          src={homeVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        
        />
        {/* Optional: keep a subtle overlay on top of the video */}
        <div className="app-bg-overlay" style={{ "--overlay": "0.36" }} />
      </>
    );
  }

  // All other pages: single gradient background
  return (
    <div
      className="app-bg-gradient"
      aria-hidden="true"
      // you can tweak strength live with CSS vars if needed:
      style={{
        // "--grad-white": "rgba(255,255,255,0.88)",
        // "--grad-black": "rgba(0,0,0,0.96)",
      }}
    />
  );
}

function App() {
  return (
    <div className="app-root">
      <BackgroundLayer />

      <div className="app-content d-flex flex-column min-vh-100">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-measurement" element={<GetMeasurement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
