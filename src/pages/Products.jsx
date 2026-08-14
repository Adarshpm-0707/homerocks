import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

import italianMarbleVideo from "../assets/videos/italian video.mp4";
import exoticMarbleVideo from "../assets/videos/Exotic video.mp4";
import onyxVideo from "../assets/videos/onyx video.mp4";
import travertineVideo from "../assets/videos/Travertine video.mp4";
import Quartzitemarble from "../assets/videos/Quartzite marble.mp4";
import Premiumindianmarbles from "../assets/videos/Premium Indian Marbles.mp4";
// 🔹 Rename this to avoid clash with Quartz component
import quartzVideo from "../assets/videos/Quartz marble.mp4";
import Granite from "../assets/videos/Granite.mp4";

// 🔹 Each category now has a `path` that matches App.js routes
const rawCategories = [
  { name: "Italian Marbles", video: italianMarbleVideo, path: "/italian-marbles" },
  { name: "Exotic Marbles", video: exoticMarbleVideo, path: "/exotic-marbles" },
  { name: "Onyx", video: onyxVideo, path: "/onyx" },
  { name: "Travertine", video: travertineVideo, path: "/travertine" },
  { name: "Quartzite", video: Quartzitemarble, path: "/quartzite" },
  { name: "Premium Indian Marbles", video: Premiumindianmarbles, path: "/indian-marbles" },
  { name: "Quartz", video: quartzVideo, path: "/quartz" },   // ✅ uses quartzVideo
  { name: "Granite", video: Granite, path: "/granite" },
];

function Products() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const categories = useMemo(() => rawCategories, []);

  useEffect(() => {
    const sec = sectionRef.current;
    if (sec) {
      sec.classList.add("pr-section-enter");
      requestAnimationFrame(() => sec.classList.add("pr-section-in"));
    }

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

    const videos = document.querySelectorAll(".hr-category-video");
    const videoIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!(video instanceof HTMLVideoElement)) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            if (video.paused) {
              video.play().catch(() => {});
            }
          } else {
            if (!video.paused) video.pause();
          }
        });
      },
      { threshold: [0, 0.6, 1] }
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
            Explore premium stones carefully curated for homes, villas, and commercial spaces.
          </p>
        </div>

        {/* Horizontal scroll */}
        <div ref={scrollRef} className="products-scroll-wrap reveal" data-reveal="fade">
          <div className="edge-fade edge-left" aria-hidden="true" />
          <div className="edge-fade edge-right" aria-hidden="true" />

          <div className="products-scroll-container" role="list">
            {categories.map((cat, index) => {
              const side = index % 2 === 0 ? "left" : "right";
              const delayClass = `delay-${(index % 4) + 1}`;
              const floatClass = `card-float-${index % 3}`;

              const cardContent = (
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
                          title={`${cat.name} overview video`}
                        >
                          <track kind="captions" srcLang="en" label="English" />
                        </video>
                        <div className="hr-category-label">{cat.name}</div>
                      </>
                    ) : (
                      <div className="hr-category-fallback">{cat.name}</div>
                    )}
                  </div>
                </div>
              );

              return (
                <div
                  role="listitem"
                  key={cat.name}
                  className={`product-scroll-item reveal ${delayClass}`}
                  data-reveal={side}
                >
                  {/* 🔗 Every card links to its related detail page */}
                  <Link to={cat.path} className="hr-link-wrapper">
                    {cardContent}
                  </Link>
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
