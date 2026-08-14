import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BLOG_DATA } from "./BlogProduct";
import "../styles/BlogIndex.css";

// ─── Build card list from BLOG_DATA in BlogProduct.jsx ───────────────────────

const CARDS = Object.entries(BLOG_DATA).map(([slug, post]) => ({
  slug,
  tag:      post.tag,
  title:    post.title,
  date:     post.date,
  readTime: post.readTime,
  stats:    post.stats || [],
  excerpt:  (post.lede || post.intro || "").slice(0, 140) + "...",
}));

// ─── SVG marble thumbnails per slug ──────────────────────────────────────────
const SHARED_THUMBNAIL = (
  <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{width:"100%",height:"100%",display:"block"}}>
    <rect width="400" height="240" fill="#2C1C0E"/>
    <g opacity="0.25">
      <path d="M-10,55 Q120,35 210,120 Q290,195 430,165 Q510,142 610,185"
        stroke="#C8A06B" strokeWidth="1.8" fill="none"/>
      <path d="M0,125 Q130,100 225,180 Q305,250 445,218 Q525,195 610,238"
        stroke="#B8904A" strokeWidth="1.1" fill="none"/>
      <path d="M60,8 Q82,95 68,195 Q54,260 76,240"
        stroke="#A07840" strokeWidth="0.7" fill="none"/>
      <path d="M290,0 Q312,80 296,175 Q280,255 308,240"
        stroke="#B89050" strokeWidth="0.9" fill="none"/>
    </g>
    <defs>
      <radialGradient id="t1" cx="35%" cy="30%">
        <stop offset="0%" stopColor="#3A2410" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#120A04" stopOpacity="0.82"/>
      </radialGradient>
    </defs>
    <rect width="400" height="240" fill="url(#t1)"/>
    <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle"
      fontFamily="Georgia,serif" fontSize="34" fill="rgba(255,255,255,0.05)"
      fontStyle="italic">Kerala Stone</text>
    <text x="50%" y="63%" textAnchor="middle" dominantBaseline="middle"
      fontFamily="Arial,sans-serif" fontSize="10"
      fill="rgba(184,137,43,0.42)" letterSpacing="8">NATURAL STONE</text>
  </svg>
);

const THUMBNAILS = {
  "natural-stone-kerala": SHARED_THUMBNAIL,
  "italian-marble-guide": SHARED_THUMBNAIL,
  "stone-flooring-guide-kannur-thalipparamba": SHARED_THUMBNAIL,
  "marble-granite-showroom-kannur-thalipparamba": SHARED_THUMBNAIL,
};

const CAT_CLASS = {
  "Flooring & Stone":   "bi-cat-guide",
  "Buying Guide":       "bi-cat-import",
  "Local Guide":        "bi-cat-import",
  "Care & Maintenance": "bi-cat-care",
  "Design Ideas":       "bi-cat-design",
};

// ─────────────────────────────────────────────────────────────────────────────
export default function Blog() {
  const gridRef = useRef(null);

  /* filter pill active state */
  useEffect(() => {
    const pills = document.querySelectorAll(".bi-pill");
    const on = function () {
      pills.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
    };
    pills.forEach((p) => p.addEventListener("click", on));
    return () => pills.forEach((p) => p.removeEventListener("click", on));
  }, []);

  /* scroll-reveal */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("bi-card-in"); }),
      { threshold: 0.1 }
    );
    gridRef.current?.querySelectorAll(".bi-post-card").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="bi-root">

      {/* ── HERO ── */}
      <div className="bi-hero">
        <span className="bi-hero-eyebrow">Expert Insights &amp; Design Inspiration</span>
        <h1 className="bi-hero-title">The <em>Homerocks</em> Journal</h1>
        <p className="bi-hero-sub">
          Comprehensive guides, care tips &amp; stone inspiration for homeowners in North Malabar.
        </p>
      </div>

    

      {/* ── BLOG CARDS — fetched from BLOG_DATA in BlogProduct.jsx ── */}
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "80px 48px 0" }}>
        <div className="bi-section-label">
          Latest Guides &amp; Articles
        </div>
      </div>

      <div className="bi-cards-row" ref={gridRef}>
        {CARDS.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="bi-post-card"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Thumbnail */}
            <div className="bi-card-image">
              {THUMBNAILS[post.slug] ?? (
                <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg"
                  style={{width:"100%",height:"100%",display:"block"}}>
                  <rect width="400" height="240" fill="#1A1410"/>
                </svg>
              )}
              <span className={`bi-card-cat ${CAT_CLASS[post.tag] ?? "bi-cat-guide"}`}>
                {post.tag}
              </span>
            </div>

            {/* Body */}
            <div className="bi-card-body">
              <div className="bi-card-meta">{post.date} · {post.readTime}</div>
              <h3 className="bi-card-title">{post.title}</h3>
              <p className="bi-card-excerpt">{post.excerpt}</p>
              
              {/* Stats Row */}
              {post.stats.length > 0 && (
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", borderTop: "1px solid var(--bi-rule)", paddingTop: "1.2rem" }}>
                  {post.stats.slice(0, 3).map((s, si) => (
                    <div key={si}>
                      <div style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--bi-ink)" }}>{s.num}</div>
                      <div style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--bi-muted)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bi-card-footer">
                <span className="bi-read-time">Homerocks Editorial</span>
                <span className="bi-arrow-btn" aria-hidden="true">
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── SHOWROOM CTA ── */}
      <div className="bi-showroom-cta">
        <div className="bi-cta-left">
          <div className="bi-cta-tag">Visit Us In Kannur</div>
          <h2 className="bi-cta-heading">
            North Malabar's Largest<br /><em>Import Showroom</em>
          </h2>
          <p className="bi-cta-sub">
            See over 200 varieties of imported marble and granite in person.
            Our team guides you to the perfect stone — no pressure, just expertise.
          </p>
        </div>
        <div className="bi-cta-actions">
          <button className="bi-btn-primary"
            onClick={() => window.open("https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc", "_blank")}>
            Book a Site Visit
          </button>
          <button className="bi-btn-outline"
            onClick={() => window.open("https://wa.me/918113001110", "_blank")}>
            WhatsApp Us
          </button>
        </div>
      </div>

    </div>
  );
}
