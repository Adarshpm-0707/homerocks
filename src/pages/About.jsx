// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

import warehouseImg from "../assets/wharehouse.webp";
import processingImg from "../assets/factory.webp";
import installedProjectImg from "../assets/installed-project.webp";

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    // Page enter
    el.classList.add("a-enter");
    requestAnimationFrame(() => el.classList.add("a-in"));

    // Sidewise reveal observer (matches .reveal-left/right/up)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".reveal-left, .reveal-right, .reveal-up")
      .forEach((node) => io.observe(node));

    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="about-clean">
      {/* Background */}
      <div className="about-bg" aria-hidden="true" />

      {/* Center all text content */}
      <div className="container center-all">
        {/* HERO */}
        <header className="glass hero reveal-up">
          <span className="kicker anim-float">Since 1995 • Aleef Heritage</span>
          <h1 className="reveal-up delay-1">ABOUT HOMEROCKS KANNUR</h1>
          <p className="muted reveal-up delay-2">
            Bringing the world’s finest stones closer to homeowners, architects, and builders —
            with transparency, consistent quality, and complete service support.
          </p>
          <div className="actions reveal-up delay-3">
            <a className="btn btn-danger anim-pulse" href="#story">Our Story</a>
            <a className="btn btn-danger" href="#network">Sourcing Network</a>
          </div>
        </header>

        {/* 3-COLUMN SUMMARY */}
        <section className="grid grid-3" style={{ marginBottom: 12 }}>
          <article className="glass block reveal-left">
            <h3>Our Purpose</h3>
            <p className="muted">
              HOMEROCKS was created to bring the world’s finest stones closer to you — backed by
              transparency, consistent quality, and complete service support.
            </p>
          </article>
          <article className="glass block reveal-up delay-1">
            <h3>A Legacy Since 1995</h3>
            <p className="muted">
              Rooted in Aleef (est. 1995), we combine decades of trusted relationships with modern,
              customer-first processes.
            </p>
          </article>
          <article className="glass block reveal-right delay-2">
            <h3>Our Vision</h3>
            <p className="muted">
              Deliver the best quality at the best price so every project can access dependable,
              beautiful stone solutions without compromise.
            </p>
          </article>
        </section>

        {/* FULL STORY */}
        <section id="story" className="glass block reveal-up" style={{ marginBottom: 12 }}>
          <h2>Our Story</h2>
          <p className="muted">
            HOMEROCKS stands on the strong foundation of Aleef, established in 1995. Over three
            decades, Aleef has grown into a trusted name known for honesty, quality, and customer
            loyalty. This heritage continues through HOMEROCKS — combining long-standing industry
            relationships with modern processes and customer-focused service.
            From Italian marble and exotic onyx to premium Indian marble, travertine, quartzite, and
            high-performance quartz — every material is handpicked. We verify sourcing, inspect every
            block and slab, and maintain strict quality checks across our warehouse, factory, and
            dispatch operations.
          </p>
        </section>

        {/* QC + TRUST */}
        <section className="grid grid-2" style={{ marginBottom: 12 }}>
          <article className="glass reveal-left">
            <h3>Our 3-Stage Quality Check</h3>
            <ol className="steps">
              <li className="reveal-up delay-1">
                <strong>Block &amp; Slab Inspection at Source</strong>
                <span className="muted">
                  Selection at quarries/stockyards to ensure authenticity, grade, and pattern consistency.
                </span>
              </li>
              <li className="reveal-up delay-2">
                <strong>Processing &amp; Finishing Check</strong>
                <span className="muted">
                  Supervised processing verifying thickness, polish quality, surface finish, and strength.
                </span>
              </li>
              <li className="reveal-up delay-3">
                <strong>Final Inspection Before Dispatch</strong>
                <span className="muted">
                  Checks for color consistency, polish accuracy, edge finishing, and safe transport.
                </span>
              </li>
            </ol>
          </article>

          <article className="glass block reveal-right">
            <h3>Why Customers Trust Us</h3>
            <ul className="checks">
              <li className="anim-jump delay-1">Direct sourcing from quarries &amp; trusted partners</li>
              <li className="anim-jump delay-2">Transparent pricing with best-price guarantee</li>
              <li className="anim-jump delay-3">End-to-end support: selection to installation</li>
              <li className="anim-jump delay-4">Reliable timelines &amp; project handling</li>
              <li className="anim-jump delay-5">Dedicated after-sales support</li>
            </ul>
          </article>
        </section>

        {/* SOURCING NETWORK */}
        <section id="network" className="glass block reveal-up" style={{ marginBottom: 12 }}>
          <h2>Our Sourcing Network</h2>
          <p className="muted">Our network includes:</p>
          <div className="tags">
            {[
              "Italian quarries (premium marble)",
              "Turkey & Iran (onyx, travertine)",
              "Spain & Portugal (specialty stones)",
              "India (granite, Indian marble, quartzite)",
              "Trusted global factories (engineered quartz)",
            ].map((t, i) => (
              <span className={`tag ${i % 2 === 0 ? "anim-float" : ""}`} key={t}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="grid grid-3">
          {[
            {src: warehouseImg, alt: "Warehouse", cls:"reveal-left"},
            {src: processingImg, alt: "Processing / Factory", cls:"reveal-up delay-1"},
            {src: installedProjectImg, alt: "Installed Project", cls:"reveal-right delay-2"},
          ].map((it) => (
            <figure className={`glass image-card card ${it.cls}`} key={it.alt}>
              <img src={it.src} alt={it.alt} loading="lazy" width="400" height="260" />
              <figcaption>{it.alt}</figcaption>
            </figure>
          ))}
        </section>

        {/* CTA */}
        <section className="glass hero reveal-up" style={{ marginTop: 16 }}>
          <h3>Ready to spec HOMEROCKS for your next project?</h3>
          <p className="muted">Talk to us for curated selections, pricing, and site support.</p>
          <div className="actions">
            <Link to="/products" className="btn btn-danger anim-pulse">View Collections</Link>
            <Link to="/contact" className="btn btn-danger">Contact Us</Link>
          </div>
        </section>
      </div>
    </section>
  );
}
