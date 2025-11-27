import React, { useEffect, useMemo, useRef } from "react";
import "../styles/Products.css";

import italianMarbleVideo from "../assets/videos/italian video.mp4";
import exoticMarbleVideo from "../assets/videos/Exotic video.mp4";
import onyxVideo from "../assets/videos/onyx video.mp4";
import travertineVideo from "../assets/videos/Travertine video.mp4";
import Quartzitemarble from "../assets/videos/Quartzite marble.mp4";
import Premiumindianmarbles from "../assets/videos/Premium Indian Marbles.mp4";
import Quartz from "../assets/videos/Quartz marble.mp4";
import Granite from "../assets/videos/Granite.mp4";

const rawCategories = [
  { name: "Italian Marbles", video: italianMarbleVideo },
  { name: "Exotic Marbles", video: exoticMarbleVideo },
  { name: "Onyx", video: onyxVideo },
  { name: "Travertine", video: travertineVideo },
  { name: "Quartzite", video: Quartzitemarble },
  { name: "Premium Indian Marbles", video: Premiumindianmarbles },
  { name: "Quartz", video: Quartz },
  { name: "Granite", video: Granite },
];

function Products() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  // Add a stable key so React doesn't remount videos unnecessarily
  const categories = useMemo(() => rawCategories, []);

  useEffect(() => {
    // 1) Section mount animation (whole section moves in slightly)
    const sec = sectionRef.current;
    if (sec) {
      sec.classList.add("pr-section-enter");
      requestAnimationFrame(() => sec.classList.add("pr-section-in"));
    }

    // 2) Scroll reveal for elements with .reveal
    const revealEls = document.querySelectorAll(".products-section .reveal");
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealIO.observe(el));

    // 3) Autoplay/pause videos only when cards are in view enough
    const videos = document.querySelectorAll(".hr-category-video");
    const videoIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            // ensure autoplay
            if (video.paused) {
              const playPromise = video.play();
              if (playPromise && typeof playPromise.catch === "function") {
                playPromise.catch(() => {});
              }
            }
          } else {
            // pause when off-screen
            if (!video.paused) video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
      }
    );
    videos.forEach((v) => videoIO.observe(v));

    return () => {
      revealIO.disconnect();
      videoIO.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-5 products-section">
      <div className="container text-center products-container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="section-title text-white mb-2 reveal fs-1" data-reveal="up">
            Stone Collections
          </h2>
          <p className="text-white mb-0 reveal delay-1" data-reveal="up">
            Explore premium stones carefully curated for homes, villas,
            and commercial spaces.
          </p>
        </div>

        {/* Horizontal scroll row */}
        <div ref={scrollRef} className="products-scroll-wrap reveal" data-reveal="fade">
          <div className="edge-fade edge-left" aria-hidden="true" />
          <div className="edge-fade edge-right" aria-hidden="true" />

          <div className="products-scroll-container" role="list">
            {categories.map((cat, index) => {
              const side = index % 2 === 0 ? "left" : "right";
              const delayClass = `delay-${(index % 4) + 1}`; // 1..4 loop
              const floatClass = `card-float-${index % 3}`; // 0..2 variation

              return (
                <div
                  role="listitem"
                  key={cat.name}
                  className={`product-scroll-item reveal ${delayClass}`}
                  data-reveal={side}
                >
                  <div className={`hr-category-card card-float ${floatClass}`} tabIndex={0}>
                    <div className="hr-category-media">
                      {cat.video ? (
                        <>
                          <video
                            className="hr-category-video"
                            src={cat.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                          <div className="hr-category-label">{cat.name}</div>
                        </>
                      ) : (
                        <div className="hr-category-fallback">{cat.name}</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="small text-white mt-3 reveal delay-1" data-reveal="up">
          *More colors and finishes available in our showroom.
        </p>
      </div>
    </section>
  );
}

export default Products;
