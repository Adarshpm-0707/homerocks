import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import GetMeasurement from "./pages/GetMeasurement";

import bgVideo from "./assets/videos/background.mp4"; // ⬅️ your background video

function App() {
  return (
    <div className="app-root">
      {/* Fullscreen background video */}
      <video
        className="app-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay on top of video */}
      <div className="app-bg-overlay" />

      {/* Foreground content (all pages) */}
      <div className="app-content d-flex flex-column min-vh-100">
           <ScrollToTop /> 
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
