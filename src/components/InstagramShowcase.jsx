// src/components/InstagramShowcase.jsx
import React from "react";
import {
  Instagram,
  ExternalLink,
  Heart,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import "../styles/InstagramShowcase.css";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/homerocksindia";

// Post shortcodes with display labels
const SHOWCASE_POSTS = [
  { shortcode: "DbIhEwBCXdy", url: "https://www.instagram.com/p/DbIhEwBCXdy/", label: "Marble Reveal" },
  { shortcode: "DbH5l6ZCazb", url: "https://www.instagram.com/p/DbH5l6ZCazb/", label: "Stone Collection" },
  { shortcode: "DZhGOWyie6m", url: "https://www.instagram.com/p/DZhGOWyie6m/", label: "Showroom Tour" },
  { shortcode: "DUAPAzuD7y4", url: "https://www.instagram.com/p/DUAPAzuD7y4/", label: "Italian Marble" },
  { shortcode: "DbF4P5uCXUQ", url: "https://www.instagram.com/p/DbF4P5uCXUQ/", label: "Premium Granite" },
  { shortcode: "DZhjJvCCf6T", url: "https://www.instagram.com/p/DZhjJvCCf6T/", label: "Exotic Onyx" },
  { shortcode: "DZfHQtHiXm3", url: "https://www.instagram.com/p/DZfHQtHiXm3/", label: "Luxury Interiors" },
];

// Gradient palettes for visual variety
const GRADIENTS = [
  "linear-gradient(135deg, #1a0533 0%, #6b1a4b 50%, #c0392b 100%)",
  "linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #2980b9 100%)",
  "linear-gradient(135deg, #0d0d0d 0%, #3d1515 50%, #8b1a1a 100%)",
  "linear-gradient(135deg, #0a2818 0%, #1a5c3a 50%, #27ae60 100%)",
  "linear-gradient(135deg, #1a1a0a 0%, #4a3800 50%, #c9a227 100%)",
  "linear-gradient(135deg, #0d0a28 0%, #2d1b69 50%, #6c3483 100%)",
  "linear-gradient(135deg, #1a0a00 0%, #7f2d00 50%, #e67e22 100%)",
];

function InstagramShowcase() {
  return (
    <section className="ig-showcase-section" id="instagram-showcase">
      <div className="container ig-showcase-container">

   

        {/* ── Section Title ── */}
        <div className="text-center mb-5">
          <span className="ig-section-eyebrow">
            <Sparkles size={16} className="me-1 text-warning" />
            Official Instagram Showcase
          </span>
          <h2 className="ig-section-title">Featured Showcase Posts</h2>
          <p className="ig-section-sub">
            Explore our latest posts and project reveals from{" "}
            <strong>@homerocksindia</strong> — tap any poster to view on Instagram.
          </p>
        </div>

        {/* ── Poster Grid ── */}
        <div className="ig-poster-grid">
          {SHOWCASE_POSTS.map(({ shortcode, url, label }, index) => (
            <a
              key={shortcode}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="ig-poster-card"
              aria-label={`View Instagram post: ${label}`}
            >
              {/* Background gradient */}
              <div
                className="ig-poster-bg"
                style={{ background: GRADIENTS[index % GRADIENTS.length] }}
              />

              {/* Instagram logo watermark */}
              <div className="ig-poster-logo-watermark">
                <Instagram size={28} />
              </div>

              {/* Shimmer lines (marble texture effect) */}
              <div className="ig-poster-shimmer" />

              {/* Hover overlay */}
              <div className="ig-poster-overlay">
                <div className="ig-poster-overlay-content">
                  <ExternalLink size={32} className="mb-2" />
                  <span className="fw-bold">View on Instagram</span>
                </div>
              </div>

              {/* Bottom label bar */}
              <div className="ig-poster-label">
                <div className="d-flex align-items-center gap-2">
                  <Instagram size={14} color="#e1306c" />
                  <span className="ig-poster-label-text">{label}</span>
                </div>
                <div className="d-flex align-items-center gap-3 ig-poster-actions">
                  <span className="ig-poster-action"><Heart size={13} /> <span>Like</span></span>
                  <span className="ig-poster-action"><MessageCircle size={13} /> <span>Comment</span></span>
                </div>
              </div>

              {/* Post number badge */}
              <div className="ig-poster-badge">#{index + 1}</div>
            </a>
          ))}
        </div>

        {/* ── Footer Link ── */}
        <div className="text-center mt-5">
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-lg rounded-pill px-5 shadow ig-follow-more-btn"
          >
            <Instagram size={22} className="me-2 text-danger" />
            See More Posts @homerocksindia
          </a>
        </div>

      </div>
    </section>
  );
}

export default InstagramShowcase;
