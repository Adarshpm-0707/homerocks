// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BadgeDollarSign, Wrench, Bus } from "lucide-react";

import italianMarbleImg from "../assets/italian marble.jpg";
import onyxQuartziteImg from "../assets/onyx-quartzite.jpg";
import carraraImg from "../assets/productsitems/Exotic Marbles/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/Exotic Marbles/Calacatta Marble.jpg";
import exoticStoneImg from "../assets/productsitems/Exotic Marbles/Nero Marquina Marble.jpg";

import Carousel from "bootstrap/js/dist/carousel";
import "../styles/Home.css";

function Home() {
  const whatsappLink =
    "https://wa.me/918113001110?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection.";

  const sectionRef = useRef(null);

  useEffect(() => {
    // Page enter animation
    const el = sectionRef.current;
    if (el) {
      el.classList.add("hr-section-enter");
      requestAnimationFrame(() => el.classList.add("hr-section-in"));
    }

    // Scroll reveal
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((it) => io.observe(it));

    // Initialize Bootstrap Carousel (module way)
    const carouselEl = document.getElementById("heroCarousel");
    if (carouselEl) {
      const instance = Carousel.getOrCreateInstance(carouselEl, {
        interval: 6000,
        ride: "carousel",
        wrap: true,
        touch: true,
        keyboard: true,
        pause: false,
      });
      instance.cycle();
    }

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO CAROUSEL (no arrows, no indicators) */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="6000"
        ref={sectionRef}
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <section className="hr-hero d-flex align-items-center py-5">
              <div className="container">
                <div className="row align-items-center gy-4">
                  <div className="col-lg-6">
                    <h1 className="hr-hero-title reveal" data-reveal="left">
                      Premium Stones <br /> for Luxury Interiors
                    </h1>
                    <p
                      className="hr-hero-subtitle reveal delay-1"
                      data-reveal="left"
                    >
                      HOMEROCKS brings world-class imported marbles for luxury
                      homes and commercial spaces. Proud member of the Aleef
                      Group.
                    </p>
                    <section className="py-4">
                      <div className="container">
                        <div
                          className="row g-2 g-sm-3 justify-content-center hr-cta reveal"
                          data-reveal="up"
                        >
                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/products"
                              className="btn btn-outline-light btn-lg"
                            >
                              View Collections
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/get-measurement"
                              className="btn btn-outline-light btn-lg"
                            >
                              Get Measurement
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline-light btn-lg"
                              aria-label="Chat on WhatsApp"
                            >
                              WhatsApp Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="col-lg-6 text-lg-end">
                    <div className="hr-hero-image-box">
                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal"
                          data-reveal="right"
                        >
                          <img
                            src={italianMarbleImg}
                            alt="Polished slab of Italian marble"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Italian Marble
                          </span>
                        </div>
                      </Link>

                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal delay-1"
                          data-reveal="right"
                        >
                          <img
                            src={onyxQuartziteImg}
                            alt="Onyx and quartzite stone sample"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Onyx | Quartzite
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <section className="hr-hero d-flex align-items-center py-5">
              <div className="container">
                <div className="row align-items-center gy-4">
                  <div className="col-lg-6">
                    <h1 className="hr-hero-title reveal" data-reveal="left">
                      Handpicked Italian Collections
                    </h1>
                    <p
                      className="hr-hero-subtitle reveal delay-1"
                      data-reveal="left"
                    >
                      Elevate lobbies, countertops, and feature walls with
                      timeless beauty.
                    </p>
                    <section className="py-4">
                      <div className="container">
                        <div
                          className="row g-2 g-sm-3 justify-content-center hr-cta reveal"
                          data-reveal="up"
                        >
                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/products"
                              className="btn btn-outline-light btn-lg"
                            >
                              View Collections
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/get-measurement"
                              className="btn btn-outline-light btn-lg"
                            >
                              Get Measurement
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline-light btn-lg"
                              aria-label="Chat on WhatsApp"
                            >
                              WhatsApp Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="col-lg-6 text-lg-end">
                    <div className="hr-hero-image-box">
                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal"
                          data-reveal="right"
                        >
                          <img
                            src={carraraImg}
                            alt="Carrara marble selection close-up"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Carrara Selection
                          </span>
                        </div>
                      </Link>

                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal delay-1"
                          data-reveal="right"
                        >
                          <img
                            src={calacattaImg}
                            alt="Calacatta Gold marble sample"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Calacatta Gold
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <section className="hr-hero d-flex align-items-center py-5">
              <div className="container">
                <div className="row align-items-center gy-4">
                  <div className="col-lg-6">
                    <h1 className="hr-hero-title reveal" data-reveal="left">
                      Onyx & Exotic Stones
                    </h1>
                    <p
                      className="hr-hero-subtitle reveal delay-1"
                      data-reveal="left"
                    >
                      Rare quartzites and premium backlit onyx collections.
                    </p>
                    <section className="py-4">
                      <div className="container">
                        <div
                          className="row g-2 g-sm-3 justify-content-center hr-cta reveal"
                          data-reveal="up"
                        >
                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/products"
                              className="btn btn-outline-light btn-lg"
                            >
                              View Collections
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <Link
                              to="/get-measurement"
                              className="btn btn-outline-light btn-lg"
                            >
                              Get Measurement
                            </Link>
                          </div>

                          <div className="col-12 col-sm-auto d-grid">
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline-light btn-lg"
                              aria-label="Chat on WhatsApp"
                            >
                              WhatsApp Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className="col-lg-6 text-lg-end">
                    <div className="hr-hero-image-box">
                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal"
                          data-reveal="right"
                        >
                          <img
                            src={onyxQuartziteImg}
                            alt="Backlit onyx panel glowing"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Backlit Onyx
                          </span>
                        </div>
                      </Link>

                      <Link to="/products" className="hero-image-link">
                        <div
                          className="hr-hero-image-wrapper reveal delay-1"
                          data-reveal="right"
                        >
                          <img
                            src={exoticStoneImg}
                            alt="Nero Marquina exotic marble slab"
                            className="hr-hero-image"
                          />
                          <span className="hr-hero-image-label">
                            Exotic Quartzite
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <section className="py-5">
        <div className="container">
          <div className="row gy-3 text-center">
            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop reveal"
                data-reveal="left"
                onClick={() =>
                  window.open(whatsappLink, "_blank", "noopener,noreferrer")
                }
              >
                <div className="hr-highlight-icon" aria-hidden="true">
                  <CheckCircle size={32} />
                </div>
                <p>Verified sourcing</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop delay-1 reveal"
                data-reveal="right"
                onClick={() =>
                  window.open(whatsappLink, "_blank", "noopener,noreferrer")
                }
              >
                <div className="hr-highlight-icon" aria-hidden="true">
                  <BadgeDollarSign size={32} />
                </div>
                <p>Best price guarantee</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop delay-2 reveal"
                data-reveal="left"
                onClick={() =>
                  window.open(whatsappLink, "_blank", "noopener,noreferrer")
                }
              >
                <div className="hr-highlight-icon" aria-hidden="true">
                  <Wrench size={32} />
                </div>
                <p>Installation support</p>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop delay-3 reveal"
                data-reveal="right"
                onClick={() =>
                  window.open(whatsappLink, "_blank", "noopener,noreferrer")
                }
              >
                <div className="hr-highlight-icon" aria-hidden="true">
                  <Bus size={32} />
                </div>
                <p>Shuttle service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
