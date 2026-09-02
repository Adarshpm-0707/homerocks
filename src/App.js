import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Eager load Home for instant First Contentful Paint
import Home from "./pages/Home";

import homeVideo from "./assets/videos/background.mp4";
import "./styles/AppBackground.css";

// Lazy load all inner routes for optimal mobile performance & fast response
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GetMeasurement = lazy(() => import("./pages/GetMeasurement"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogProduct = lazy(() => import("./pages/BlogProduct"));
const Showcase = lazy(() => import("./pages/Showcase"));
const Projects = lazy(() => import("./pages/Projects"));

// Stone detail pages (Lazy Loaded)
const ItalianMarble = lazy(() => import("./productitemspage/ItalianMarble"));
const ExoticMarbles = lazy(() => import("./productitemspage/ExoticMarbles"));
const Onyx = lazy(() => import("./productitemspage/Onyx"));
const Travertine = lazy(() => import("./productitemspage/Travertine"));
const Quartzite = lazy(() => import("./productitemspage/Quartzite"));
const PremiumIndianMarbles = lazy(() => import("./productitemspage/PremiumIndianMarbles"));
const Quartz = lazy(() => import("./productitemspage/Quartz"));
const Granite = lazy(() => import("./productitemspage/Granite"));

function BackgroundLayer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile or non-home pages, use fast, hardware-accelerated CSS gradient
  if (isHome && !isMobile) {
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
          title="Homerocks background video"
        >
          <track kind="captions" srcLang="en" label="English" />
        </video>
        <div className="app-bg-overlay" style={{ "--overlay": "0.36" }} />
      </>
    );
  }

  return <div className="app-bg-gradient" aria-hidden="true" />;
}

// Fallback loader for lazy routes
function RouteLoader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="spinner-border spinner-border-sm text-light me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="small">Loading HOMEROCKS...</span>
    </div>
  );
}

function App() {
  return (
    <div className="app-root">
      {/* Background (video on desktop home, fast gradient on mobile & inner pages) */}
      <BackgroundLayer />

      {/* Foreground content */}
      <div className="app-content d-flex flex-column min-vh-100">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow-1">
          <Suspense fallback={<RouteLoader />}>
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-measurement" element={<GetMeasurement />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogProduct />} />
              <Route path="/showcase" element={<Showcase />} />
              <Route path="/projects" element={<Projects />} />

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
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;

