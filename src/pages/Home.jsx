import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, BadgeDollarSign, Wrench, Bus } from "lucide-react";

import italianMarbleImg from "../assets/italian marble.jpg";
import onyxQuartziteImg from "../assets/onyx-quartzite.jpg";

import "../styles/Home.css";

function Home() {
  const whatsappLink =
    "https://wa.me/918113001110?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection.";

  const sectionRef = useRef(null);

  useEffect(() => {
    // Page enter animation
    const el = sectionRef.current;
    el.classList.add("hr-section-enter");
    requestAnimationFrame(() => el.classList.add("hr-section-in"));

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
    revealEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section ref={sectionRef} className="hr-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* LEFT TEXT */}
            <div className="col-lg-6">
              <h1 className="hr-hero-title reveal" data-reveal="left">
                Premium Stones <br /> for Luxury Interiors
              </h1>

              <p className="hr-hero-subtitle reveal delay-1" data-reveal="left">
                HOMEROCKS brings world-class imported marbles for luxury homes
                and commercial spaces. Proud member of the Aleef Group.
              </p>

              <div className="d-flex flex-wrap gap-2 hr-cta reveal" data-reveal="up">
                <Link to="/products" className="btn btn-outline-light">
                  View Collections
                </Link>
                <Link to="/get-measurement" className="btn btn-outline-light">
                  Get Measurement
                </Link>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="col-lg-6 text-lg-end">
              <div className="hr-hero-image-box">
                <div className="hr-hero-image-wrapper reveal" data-reveal="right">
                  <img
                    src={italianMarbleImg}
                    alt="Italian Marble"
                    className="hr-hero-image"
                  />
                  <span className="hr-hero-image-label">Italian Marble</span>
                </div>

                <div
                  className="hr-hero-image-wrapper reveal delay-1"
                  data-reveal="right"
                >
                  <img
                    src={onyxQuartziteImg}
                    alt="Onyx & Quartzite"
                    className="hr-hero-image"
                  />
                  <span className="hr-hero-image-label">Onyx | Quartzite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="py-5">
        <div className="container">
          <div className="row gy-3 text-center">
            {/* CARD 1 */}
            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop reveal"
                data-reveal="left"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <div className="hr-highlight-icon">
                  <CheckCircle size={32} />
                </div>
                <p>Verified sourcing</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop jump-delay-1 reveal delay-1"
                data-reveal="right"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <div className="hr-highlight-icon">
                  <BadgeDollarSign size={32} />
                </div>
                <p>Best price guarantee</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop jump-delay-2 reveal delay-2"
                data-reveal="left"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <div className="hr-highlight-icon">
                  <Wrench size={32} />
                </div>
                <p>Installation support</p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-6 col-md-3">
              <div
                className="hr-highlight-card jump-loop jump-delay-3 reveal delay-3"
                data-reveal="right"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <div className="hr-highlight-icon">
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
