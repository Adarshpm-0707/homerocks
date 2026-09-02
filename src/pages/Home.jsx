// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  BadgeDollarSign,
  Wrench,
  Bus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Building,
  Layers,
  MapPin,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

// Compressed Assets
import italianMarbleImg from "../assets/italian marble.webp";
import onyxQuartziteImg from "../assets/onyx-quartzite.webp";
import carraraImg from "../assets/productsitems/italian marble/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/italian marble/Calacatta Marble.jpg";
import neroMarquinaImg from "../assets/productsitems/Exotic Marbles/Nero Marquina Marble.jpg";
import botticinoImg from "../assets/productsitems/italian marble/Botticino Marble.jpg";

import absoluteBlackGraniteImg from "../assets/productsitems/Granite/Absolute Black Granite.jpg";
import blackGalaxyGraniteImg from "../assets/productsitems/Granite/Black Galaxy Granite.jpg";
import kashmirWhiteGraniteImg from "../assets/productsitems/Granite/Kashmir White Granite.jpg";
import steelGreyGraniteImg from "../assets/productsitems/Granite/Steel Grey Granite.jpg";

import travertineImg from "../assets/productsitems/Travertine/Travertine Beige marble.jpg";
import tajMahalQuartziteImg from "../assets/productsitems/Quartzite/Taj Mahal Quartzite.jpg";
import warehouseImg from "../assets/wharehouse.webp";

import Carousel from "bootstrap/js/dist/carousel";
import "../styles/Home.css";

// FAQ Data
const FAQ_ITEMS = [
  {
    q: "Where is HOMEROCKS marble and granite showroom located in Kannur?",
    a: "HOMEROCKS showroom and warehouse is centrally located in Kuppam, Taliparamba, Kannur, Kerala 670502. We are situated conveniently for customers visiting from Kannur City, Payyanur, Kanhangad, and Kasaragod. Complimentary shuttle service is available for showroom visits.",
  },
  {
    q: "What types of imported marbles are available at HOMEROCKS?",
    a: "We curate world-class natural stones including Italian Marble (Carrara, Calacatta Gold, Statuario, Botticino, Nero Portoro), Exotic Marbles (Nero Marquina, Emperador), Backlit Onyx, Travertine, Quartzite, and Premium Indian Marbles with book-match slab selections.",
  },
  {
    q: "Why is granite recommended for Kerala kitchens and outdoor flooring?",
    a: "Granite is an extremely dense igneous stone that resists moisture, extreme heat, scratching, and acidic stains (such as spices and tamarind). For Kannur's climate and high-use spaces like kitchen countertops, staircases, and verandas, granite offers unmatched longevity with minimal maintenance.",
  },
  {
    q: "Do you provide on-site measurement and installation support?",
    a: "Yes! HOMEROCKS offers comprehensive end-to-end support including free on-site measurement, material consultation, precision factory cutting, certified installation guidance, and mirror-finish stone polishing across North Malabar.",
  },
];

// Marble Collection Categories
const MARBLE_COLLECTIONS = [
  {
    title: "Italian Marble",
    desc: "Timeless Carrara, dramatic Calacatta Gold, and Statuario slabs handpicked from Italy.",
    img: carraraImg,
    path: "/italian-marbles",
    tag: "Imported Luxury",
  },
  {
    title: "Exotic Marbles",
    desc: "Bold Nero Marquina, Emperador, and Fantasy Brown for statement walls and lavish interiors.",
    img: neroMarquinaImg,
    path: "/exotic-marbles",
    tag: "High Contrast",
  },
  {
    title: "Backlit Onyx Slabs",
    desc: "Translucent onyx stones that glow brilliantly with backlighting for bars and feature walls.",
    img: onyxQuartziteImg,
    path: "/onyx",
    tag: "Illuminated",
  },
  {
    title: "Travertine Collection",
    desc: "Earthy, textured travertine from classic quarries, ideal for modern architectural facades.",
    img: travertineImg,
    path: "/travertine",
    tag: "Modern Texture",
  },
  {
    title: "Natural Quartzite",
    desc: "Super-durable natural quartzites like Taj Mahal and Patagonia combining marble beauty with granite strength.",
    img: tajMahalQuartziteImg,
    path: "/quartzite",
    tag: "Ultra Durable",
  },
  {
    title: "Classic Botticino & Beige",
    desc: "Warm Italian beige marble creating bright, expansive living spaces and luxurious master bedrooms.",
    img: botticinoImg,
    path: "/italian-marbles",
    tag: "Warm Elegance",
  },
];

// Granite Collection Items
const GRANITE_COLLECTIONS = [
  {
    title: "Absolute Black Granite",
    desc: "Solid deep black with mirror finish for sleek, contemporary kitchen countertops.",
    img: absoluteBlackGraniteImg,
    path: "/granite",
    ideal: "Kitchens & Islands",
  },
  {
    title: "Black Galaxy Granite",
    desc: "Dramatic black stone embedded with golden and copper specks for opulent interiors.",
    img: blackGalaxyGraniteImg,
    path: "/granite",
    ideal: "Countertops & Vanities",
  },
  {
    title: "Steel Grey Granite",
    desc: "Subtle, refined grey crystalline texture with high slip and stain resistance.",
    img: steelGreyGraniteImg,
    path: "/granite",
    ideal: "Flooring & Steps",
  },
  {
    title: "Kashmir White Granite",
    desc: "Soft white and light grey tones with subtle mineral speckling for bright open areas.",
    img: kashmirWhiteGraniteImg,
    path: "/granite",
    ideal: "Verandas & Living",
  },
];

function Home() {
  const whatsappLink =
    "https://wa.me/918113001110?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20marble%20and%20granite%20collection.";

  const sectionRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    // Page enter animation
    const el = sectionRef.current;
    if (el) {
      el.classList.add("hr-section-enter");
      requestAnimationFrame(() => el.classList.add("hr-section-in"));
    }

    // Scroll reveal observer
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
      { threshold: 0.1 }
    );
    revealEls.forEach((it) => io.observe(it));

    // Initialize Bootstrap Carousel
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
    <div className="home-page-root">
      {/* =====================================================
          1. HERO CAROUSEL & MAIN H1 HEADING
         ===================================================== */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="6000"
        ref={sectionRef}
      >
        <div className="carousel-inner">
          {/* Slide 1 - Primary H1 Keyword */}
          <div className="carousel-item active">
            <section className="hr-hero d-flex align-items-center py-4 py-lg-5">
              <div className="container">
                <div className="row align-items-center gy-4">
                  <div className="col-lg-6">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 hr-eyebrow-pill reveal" data-reveal="left">
                      <Sparkles size={14} className="text-warning" />
                      <span className="small fw-semibold text-white-50">North Malabar's Largest Stone Destination</span>
                    </div>

                    <h1 className="hr-hero-title reveal" data-reveal="left">
                      Premium Marble &amp; Granite Showroom in Kannur
                    </h1>

                    <p className="hr-hero-subtitle reveal delay-1" data-reveal="left">
                      HOMEROCKS brings world-class imported Italian marble, premium granites, and rare onyx directly to Kannur &amp; Taliparamba. Proud member of the Aleef Group (Est. 1995).
                    </p>

                    <div className="hr-cta-container py-3">
                      <div className="d-flex flex-wrap gap-2 gap-sm-3 hr-cta reveal" data-reveal="up">
                        <Link to="/products" className="btn btn-primary btn-lg px-4">
                          View Collections <ArrowRight size={18} className="ms-1 inline-icon" />
                        </Link>
                        <Link to="/get-measurement" className="btn btn-outline-light btn-lg px-4">
                          Get Measurement
                        </Link>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-outline-light btn-lg px-4"
                          aria-label="Chat on WhatsApp"
                        >
                          WhatsApp Chat
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 text-lg-end">
                    <div className="hr-hero-image-box">
                      <Link to="/italian-marbles" className="hero-image-link" aria-label="Explore Italian Marble Collection">
                        <div className="hr-hero-image-wrapper reveal" data-reveal="right">
                          <img
                            src={italianMarbleImg}
                            alt="Imported Italian marble slabs showroom in Kannur"
                            className="hr-hero-image"
                            loading="eager"
                            fetchPriority="high"
                            width="600"
                            height="220"
                          />
                          <span className="hr-hero-image-label">Italian Marble Collection</span>
                        </div>
                      </Link>

                      <Link to="/onyx" className="hero-image-link" aria-label="Explore Onyx and Quartzite stones">
                        <div className="hr-hero-image-wrapper reveal delay-1" data-reveal="right">
                          <img
                            src={onyxQuartziteImg}
                            alt="Luxury Onyx and quartzite stone showroom Kannur"
                            className="hr-hero-image"
                            loading="eager"
                            width="600"
                            height="220"
                          />
                          <span className="hr-hero-image-label">Backlit Onyx &amp; Quartzite</span>
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
            <section className="hr-hero d-flex align-items-center py-4 py-lg-5">
              <div className="container">
                <div className="row align-items-center gy-4">
                  <div className="col-lg-6">
                    <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3 hr-eyebrow-pill reveal" data-reveal="left">
                      <Sparkles size={14} className="text-warning" />
                      <span className="small fw-semibold text-white-50">Direct Quarry Sourcing</span>
                    </div>

                    <div className="hr-hero-title reveal" data-reveal="left">
                      Handpicked Italian Collections
                    </div>

                    <p className="hr-hero-subtitle reveal delay-1" data-reveal="left">
                      Elevate living rooms, hotel lobbies, and feature walls with timeless Carrara and Calacatta stones.
                    </p>

                    <div className="hr-cta-container py-3">
                      <div className="d-flex flex-wrap gap-2 gap-sm-3 hr-cta reveal" data-reveal="up">
                        <Link to="/italian-marbles" className="btn btn-primary btn-lg px-4">
                          Italian Marbles
                        </Link>
                        <Link to="/granite" className="btn btn-outline-light btn-lg px-4">
                          Granite Slabs
                        </Link>
                        <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                          Visit Showroom
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 text-lg-end">
                    <div className="hr-hero-image-box">
                      <Link to="/italian-marbles" className="hero-image-link" aria-label="Carrara selection Italian marble">
                        <div className="hr-hero-image-wrapper reveal" data-reveal="right">
                          <img
                            src={carraraImg}
                            alt="Carrara marble selection close-up in Kannur"
                            className="hr-hero-image"
                            loading="lazy"
                            width="600"
                            height="220"
                          />
                          <span className="hr-hero-image-label">Carrara Selection</span>
                        </div>
                      </Link>

                      <Link to="/italian-marbles" className="hero-image-link" aria-label="Calacatta Gold marble slab">
                        <div className="hr-hero-image-wrapper reveal delay-1" data-reveal="right">
                          <img
                            src={calacattaImg}
                            alt="Calacatta Gold marble sample in showroom"
                            className="hr-hero-image"
                            loading="lazy"
                            width="600"
                            height="220"
                          />
                          <span className="hr-hero-image-label">Calacatta Gold</span>
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

      {/* =====================================================
          2. HIGHLIGHTS & TRUST BADGES (Internal Links)
         ===================================================== */}
      <section className="py-4 py-md-5 hr-highlights-section" aria-label="Why Choose Homerocks Highlights">
        <div className="container">
          <div className="row gy-3 text-center">
            <div className="col-6 col-md-3">
              <Link to="/about" className="text-decoration-none d-block h-100">
                <div className="hr-highlight-card reveal" data-reveal="left">
                  <div className="hr-highlight-icon" aria-hidden="true">
                    <CheckCircle size={32} />
                  </div>
                  <p>Verified Direct Sourcing</p>
                  <span className="small text-white-50">Direct from Italy &amp; Spain</span>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/products" className="text-decoration-none d-block h-100">
                <div className="hr-highlight-card delay-1 reveal" data-reveal="right">
                  <div className="hr-highlight-icon" aria-hidden="true">
                    <BadgeDollarSign size={32} />
                  </div>
                  <p>Best Price Guarantee</p>
                  <span className="small text-white-50">Transparent slab pricing</span>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/services" className="text-decoration-none d-block h-100">
                <div className="hr-highlight-card delay-2 reveal" data-reveal="left">
                  <div className="hr-highlight-icon" aria-hidden="true">
                    <Wrench size={32} />
                  </div>
                  <p>Expert Installation</p>
                  <span className="small text-white-50">Precision cutting &amp; polish</span>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/get-measurement" className="text-decoration-none d-block h-100">
                <div className="hr-highlight-card delay-3 reveal" data-reveal="right">
                  <div className="hr-highlight-icon" aria-hidden="true">
                    <Bus size={32} />
                  </div>
                  <p>Free Shuttle &amp; Site Visit</p>
                  <span className="small text-white-50">Kuppam, Taliparamba showroom</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. OUR MARBLE COLLECTION (H2 SECTION + INTERNAL LINKS)
         ===================================================== */}
      <section className="py-5 hr-section-block" id="marble-collections">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="hr-badge-eyebrow mb-2">Imported &amp; Exotic Stones</span>
            <h2 className="hr-section-title text-white reveal" data-reveal="up">
              Our Marble Collection
            </h2>
            <p className="hr-section-sub reveal delay-1" data-reveal="up">
              Explore our handpicked range of imported marbles sourced from Italy, Turkey, Greece, and Spain. Perfect for luxury floors, living spaces, bathrooms, and feature walls in Kerala homes.
            </p>
          </div>

          <div className="row g-4">
            {MARBLE_COLLECTIONS.map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <div className="hr-stone-card reveal" data-reveal="up" style={{ transitionDelay: `${idx * 0.08}s` }}>
                  <div className="hr-stone-img-wrap">
                    <img
                      src={item.img}
                      alt={`${item.title} in Kannur showroom`}
                      className="hr-stone-img"
                      loading="lazy"
                      width="400"
                      height="240"
                    />
                    <span className="hr-stone-tag">{item.tag}</span>
                  </div>
                  <div className="hr-stone-body p-4">
                    <h3 className="hr-stone-title text-white mb-2 fs-5">{item.title}</h3>
                    <p className="hr-stone-desc text-white-50 small mb-3">{item.desc}</p>
                    <Link to={item.path} className="hr-stone-link">
                      <span>Explore Collection</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-outline-light btn-lg rounded-pill px-5">
              View All Stone Collections &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. PREMIUM GRANITE COLLECTION (H2 SECTION + INTERNAL LINKS)
         ===================================================== */}
      <section className="py-5 hr-section-block hr-granite-bg" id="granite-collections">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <span className="hr-badge-eyebrow mb-2">High Durability &amp; Longevity</span>
              <h2 className="hr-section-title text-white reveal" data-reveal="left">
                Premium Granite Collection
              </h2>
              <p className="hr-section-sub reveal delay-1" data-reveal="left">
                Engineered by nature for heavy-duty performance. Ideal for modern modular kitchen countertops, exterior verandas, staircases, and commercial high-traffic areas in Kannur.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link to="/granite" className="btn btn-primary px-4 py-2">
                Explore Granite Slabs <ArrowRight size={16} className="ms-1 inline-icon" />
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {GRANITE_COLLECTIONS.map((item, idx) => (
              <div className="col-sm-6 col-lg-3" key={item.title}>
                <div className="hr-granite-card reveal" data-reveal="up" style={{ transitionDelay: `${idx * 0.08}s` }}>
                  <div className="hr-granite-img-wrap">
                    <img
                      src={item.img}
                      alt={`${item.title} granite slabs in Taliparamba Kannur`}
                      className="hr-granite-img"
                      loading="lazy"
                      width="300"
                      height="200"
                    />
                    <span className="hr-granite-ideal">{item.ideal}</span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-white fs-6 fw-bold mb-1">{item.title}</h3>
                    <p className="text-white-50 small mb-2">{item.desc}</p>
                    <Link to={item.path} className="small text-warning text-decoration-none fw-semibold d-inline-flex align-items-center gap-1">
                      View Slabs <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          5. WHY CHOOSE HOMEROCKS KANNUR (H2 SECTION + ABOUT LINKS)
         ===================================================== */}
      <section className="py-5 hr-section-block" id="why-choose-us">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="hr-badge-eyebrow mb-2">Heritage Since 1995 • Aleef Group</span>
              <h2 className="hr-section-title text-white reveal" data-reveal="left">
                Why Choose HOMEROCKS Kannur?
              </h2>
              <p className="hr-section-sub reveal delay-1" data-reveal="left">
                We bridge the gap between world-renowned Italian &amp; global quarries and North Malabar homeowners, architects, and builders.
              </p>

              <div className="hr-feature-list mt-4">
                <div className="d-flex gap-3 mb-3 reveal" data-reveal="left">
                  <div className="hr-feature-icon-circle">
                    <ShieldCheck size={22} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="fs-6 fw-bold text-white mb-1">3-Stage Quality Inspection</h3>
                    <p className="small text-white-50 mb-0">Every block is inspected at source, during factory calibration, and before final dispatch.</p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-3 reveal delay-1" data-reveal="left">
                  <div className="hr-feature-icon-circle">
                    <Building size={22} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="fs-6 fw-bold text-white mb-1">North Malabar's Largest Warehouse</h3>
                    <p className="small text-white-50 mb-0">Over 200+ varieties of live slabs on display in Kuppam, Taliparamba for real texture selection.</p>
                  </div>
                </div>

                <div className="d-flex gap-3 mb-4 reveal delay-2" data-reveal="left">
                  <div className="hr-feature-icon-circle">
                    <Layers size={22} className="text-warning" />
                  </div>
                  <div>
                    <h3 className="fs-6 fw-bold text-white mb-1">Complete End-to-End Execution</h3>
                    <p className="small text-white-50 mb-0">From free site measurement and 3D layout simulation to skilled stone laying and diamond polishing.</p>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/about" className="btn btn-outline-light px-4">
                    About Our Story
                  </Link>
                  <Link to="/services" className="btn btn-primary px-4">
                    Our Stone Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hr-warehouse-box reveal" data-reveal="right">
                <img
                  src={warehouseImg}
                  alt="Homerocks marble and granite warehouse in Kuppam Taliparamba"
                  className="img-fluid rounded-4 shadow-lg border border-white-10"
                  loading="lazy"
                  width="700"
                  height="450"
                />
                <div className="hr-warehouse-caption p-3 mt-2 rounded-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="fw-bold text-white">HOMEROCKS Experience Center</div>
                      <div className="small text-white-50">Kuppam, Taliparamba, Kannur</div>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-light d-inline-flex align-items-center gap-1"
                    >
                      <MapPin size={14} /> Map <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. FEATURED PROJECTS & APPLICATIONS (H2 SECTION)
         ===================================================== */}
      <section className="py-5 hr-section-block hr-projects-bg" id="projects-section">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="hr-badge-eyebrow mb-2">Realized Spaces</span>
            <h2 className="hr-section-title text-white reveal" data-reveal="up">
              Featured Projects &amp; Applications
            </h2>
            <p className="hr-section-sub reveal delay-1" data-reveal="up">
              Discover real homes, luxury villas, and commercial properties transformed with HOMEROCKS materials across Kerala.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <Link to="/projects" className="text-decoration-none">
                <div className="hr-project-category-card p-4 rounded-4 reveal" data-reveal="up">
                  <div className="hr-proj-tag">Residential</div>
                  <h3 className="fs-5 fw-bold text-white mt-2 mb-1">Luxury Villas</h3>
                  <p className="small text-white-50 mb-0">Living rooms, master baths, &amp; grand staircases</p>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/projects" className="text-decoration-none">
                <div className="hr-project-category-card p-4 rounded-4 reveal delay-1" data-reveal="up">
                  <div className="hr-proj-tag">Modular</div>
                  <h3 className="fs-5 fw-bold text-white mt-2 mb-1">Kitchen Countertops</h3>
                  <p className="small text-white-50 mb-0">Heat &amp; stain resistant granite &amp; quartz</p>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/projects" className="text-decoration-none">
                <div className="hr-project-category-card p-4 rounded-4 reveal delay-2" data-reveal="up">
                  <div className="hr-proj-tag">Commercial</div>
                  <h3 className="fs-5 fw-bold text-white mt-2 mb-1">Hotels &amp; Lobbies</h3>
                  <p className="small text-white-50 mb-0">Book-matched Italian marble feature walls</p>
                </div>
              </Link>
            </div>

            <div className="col-6 col-md-3">
              <Link to="/showcase" className="text-decoration-none">
                <div className="hr-project-category-card p-4 rounded-4 reveal delay-3" data-reveal="up">
                  <div className="hr-proj-tag">Live Social</div>
                  <h3 className="fs-5 fw-bold text-white mt-2 mb-1">Instagram Showcase</h3>
                  <p className="small text-white-50 mb-0">Recent site reveals &amp; showroom arrivals</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-outline-light rounded-pill px-4 me-2">
              Explore All Projects
            </Link>
            <Link to="/showcase" className="btn btn-primary rounded-pill px-4">
              View Social Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          7. FREQUENTLY ASKED QUESTIONS (H2 SECTION + SCHEMA MATCH)
         ===================================================== */}
      <section className="py-5 hr-section-block" id="faq-section">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="hr-badge-eyebrow mb-2">Got Questions?</span>
            <h2 className="hr-section-title text-white reveal" data-reveal="up">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="hr-section-sub reveal delay-1" data-reveal="up">
              Answers to popular questions about buying marble and granite for homes in Kannur and North Malabar.
            </p>
          </div>

          <div className="max-w-800 mx-auto">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`hr-faq-item mb-3 rounded-3 overflow-hidden ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="hr-faq-question w-100 d-flex justify-content-between align-items-center p-3 text-start bg-transparent border-0 text-white fw-semibold"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={20}
                      className={`hr-faq-arrow ms-2 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="hr-faq-answer px-3 pb-3 text-white-50 small">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-4">
            <p className="text-white-50 small mb-2">Have a custom question about your site or floor plan?</p>
            <Link to="/contact" className="btn btn-sm btn-outline-primary px-3 me-2">
              Contact Our Stone Experts
            </Link>
            <Link to="/blog" className="btn btn-sm btn-outline-light px-3">
              Read Stone Buying Guides
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          8. SHOWROOM VISIT CTA BAR
         ===================================================== */}
      <section className="py-5 hr-cta-banner">
        <div className="container">
          <div className="hr-cta-glass-box p-4 p-md-5 rounded-4 text-center">
            <h2 className="text-white fs-2 fw-bold mb-2">Ready to Transform Your Space?</h2>
            <p className="text-white-50 max-w-600 mx-auto mb-4">
              Visit HOMEROCKS showroom in Kuppam, Taliparamba to experience 200+ live slabs or book a complimentary site measurement today.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/get-measurement" className="btn btn-primary btn-lg px-4">
                Book Site Measurement
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                <PhoneCall size={18} className="me-2 inline-icon" /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
