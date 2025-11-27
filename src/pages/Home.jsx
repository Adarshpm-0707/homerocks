import React from "react";
import { Link } from "react-router-dom";

import italianMarbleImg from "../assets/italian marble.jpg";
import onyxQuartziteImg from "../assets/onyx-quartzite.jpg";

import "../styles/Home.css";

function Home() {

  const whatsappLink =
    "https://wa.me/918547321372?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection.";

  return (
    <>
      {/* Hero Section */}
      <section className="hr-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center gy-4">

            {/* Left Text Section */}
            <div className="col-lg-6">
              <h1 className="hr-hero-title mb-3 fs-1">
                Premium Stones
                <br />
                for Luxury Interiors.
              </h1>

              <p className="hr-hero-subtitle mb-4">
                HOMEROCKS, your gateway to the world of imported marbles. As a
                proud member of the esteemed Aleef Group, we invite you to
                explore our exquisite collection curated for luxury homes and
                commercial spaces.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-2">
                <Link to="/products" className="btn btn-primary">
                  View Collections
                </Link>

                <Link to="/get-measurement" className="btn btn-outline-light">
                  Get Measurement
                </Link>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="col-lg-6 text-lg-end">
              <div className="hr-hero-image-box">

                <div className="hr-hero-image-wrapper">
                  <img
                    src={italianMarbleImg}
                    alt="Italian Marble"
                    className="hr-hero-image"
                  />
                  <span className="hr-hero-image-label">Italian Marble</span>
                </div>

                <div className="hr-hero-image-wrapper">
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

      {/* Quick Highlights */}
  <section className="py-5">
  <div className="container">
    <div className="row gy-3 text-center">

      {/* Highlight 1 */}
      <div className="col-6 col-md-3">
        <div
          className="hr-highlight-card text-center"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <div className="hr-highlight-icon">✅</div>
          <p className="small fw-semibold">Verified sourcing</p>
        </div>
      </div>

      {/* Highlight 2 */}
      <div className="col-6 col-md-3">
        <div
          className="hr-highlight-card text-center"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <div className="hr-highlight-icon">💰</div>
          <p className="small fw-semibold">Best price guarantee</p>
        </div>
      </div>

      {/* Highlight 3 */}
      <div className="col-6 col-md-3">
        <div
          className="hr-highlight-card text-center"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <div className="hr-highlight-icon">🛠️</div>
          <p className="small fw-semibold">Installation support</p>
        </div>
      </div>

      {/* Highlight 4 */}
      <div className="col-6 col-md-3">
        <div
          className="hr-highlight-card text-center"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          <div className="hr-highlight-icon">🚐</div>
          <p className="small fw-semibold">Shuttle service available</p>
        </div>
      </div>

    </div>
  </div>
</section>


    </>
  );
}

export default Home;
