import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { app } from "./firebase";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetMeasurement from "./pages/GetMeasurement";

// Stone detail pages
import ItalianMarble from "./productitemspage/ItalianMarble";
import ExoticMarbles from "./productitemspage/ExoticMarbles";
import Onyx from "./productitemspage/Onyx";
import Travertine from "./productitemspage/Travertine";
import Quartzite from "./productitemspage/Quartzite";
import PremiumIndianMarbles from "./productitemspage/PremiumIndianMarbles";
import Quartz from "./productitemspage/Quartz";
import Granite from "./productitemspage/Granite";

import homeVideo from "./assets/videos/background.mp4";

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
        <div className="app-bg-overlay" style={{ "--overlay": "0.36" }} />
      </>
    );
  }

  return <div className="app-bg-gradient" aria-hidden="true" />;
}

function App() {
  return (
    <div className="app-root">
      {/* Background (video on home, gradient on others) */}
      <BackgroundLayer />

      {/* Foreground content */}
      <div className="app-content d-flex flex-column min-vh-100">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow-1">
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-measurement" element={<GetMeasurement />} />

            {/* Stone detail pages */}
            <Route path="/italian-marbles" element={<ItalianMarble />} />
            <Route path="/exotic-marbles" element={<ExoticMarbles />} />
            <Route path="/onyx" element={<Onyx />} />
            <Route path="/travertine" element={<Travertine />} />
            <Route path="/quartzite" element={<Quartzite />} />
            <Route path="/indian-marbles" element={<PremiumIndianMarbles />} />
            <Route path="/quartz" element={<Quartz />} />
            <Route path="/granite" element={<Granite />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
