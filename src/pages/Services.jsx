import React, { useEffect, useRef } from "react";
import "../styles/Services.css";

// ⭐ Lucide Icons
import {
  Ruler,
  Hammer,
  Sparkles,
  Users,
  Building,
  Truck,
  ShieldCheck,
  Wrench,
  ClipboardCheck,
  Bus,
} from "lucide-react";

// ⭐ Standard Services
const standardServices = [
  {
    icon: <Ruler />,
    title: "Home measurement",
    benefit: "Accurate on-site measuring to avoid wastage and rework.",
  },
  {
    icon: <Hammer />,
    title: "Installation",
    benefit: "Trusted teams trained specifically for stone installation.",
  },
  {
    icon: <Sparkles />,
    title: "Polishing",
    benefit: "Machine and hand polishing for mirror-finish floors.",
  },
  {
    icon: <Users />,
    title: "Material consultation",
    benefit: "Suggest best stones for budget, usage, and maintenance.",
  },
  {
    icon: <Building />,
    title: "Commercial project support",
    benefit: "Bulk sourcing and site coordination for large projects.",
  },
  {
    icon: <Truck />,
    title: "Material Delivery & Handling",
    benefit: "Safe transport + unloading at site with trained workers.",
  },
  {
    icon: <ShieldCheck />,
    title: "Surface Protection & Sealing",
    benefit: "Sealants applied to protect against stains and scratches.",
  },
  {
    icon: <Wrench />,
    title: "After-Sales Maintenance",
    benefit: "Annual polishing, cleaning, and repair service packages.",
  },
  {
    icon: <ClipboardCheck />,
    title: "Contractor Coordination",
    benefit: "We coordinate with masons to avoid installation mistakes.",
  },
];

// ⭐ Added Services
const addedServices = [
  {
    icon: <Bus />,
    title: "Shuttle Service",
    benefit: "Pickup & drop for clients visiting showroom/warehouse.",
  },
  {
    icon: <Wrench />,
    title: "Supervision for installation",
    benefit: "On-site expert to guide contractors during execution.",
  },
  {
    icon: <ClipboardCheck />,
    title: "On-site expert guidance",
    benefit: "Ensure correct laying pattern, slope, adhesives, and finishing.",
  },
];

function Services() {
  const whatsappNumber = "918113001110";
  const sectionRef = useRef(null);

  const handleBookClick = (serviceTitle) => {
    const msg = `Hello, I want to book the service: ${serviceTitle}`;
    const link =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(msg);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Whole-section enter animation
    const sec = sectionRef.current;
    if (sec) {
      sec.classList.add("sv-section-enter");
      requestAnimationFrame(() => sec.classList.add("sv-section-in"));
    }

    // Side-wise reveal on scroll
    const revealEls = document.querySelectorAll(".services-root .reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    revealEls.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-5 services-root">
      <div className="container position-relative">

        {/* Floating aura background */}
        <div className="sv-aura" aria-hidden="true" />

        <h1 className="section-title text-center text-white mb-3 fs-1 reveal" data-reveal="up">
          Our Services
        </h1>

        <p className="text-white text-center mb-5 reveal delay-1" data-reveal="up">
          From choosing the right stone to final polishing, HOMEROCKS is with you at every step.
        </p>

        {/* STANDARD SERVICES */}
        <h4 className="fw-semibold text-white mb-3 reveal" data-reveal="left">
          Standard Services
        </h4>

        <div className="row gy-4 mb-5">
          {standardServices.map((s, i) => (
            <div key={s.title} className="col-md-4">
              <div
                className={`hr-service-card card-float card-float-${i % 3} reveal ${"delay-" + ((i % 4) + 1)}`}
                data-reveal={i % 2 === 0 ? "left" : "right"}
                role="article"
                aria-label={s.title}
              >
                <div className="d-flex h-100">
                  <div className="hr-service-icon" aria-hidden="true">{s.icon}</div>

                  <div className="service-body">
                    <h6 className="fw-semibold mb-1 text-white">{s.title}</h6>
                    <p className="small">{s.benefit}</p>

                    <div className="service-btn-wrapper mt-auto">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleBookClick(s.title)}
                      >
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ADDED SERVICES */}
        <h4 className="fw-semibold text-white mb-3 reveal" data-reveal="left">
          Added Services
        </h4>

        <div className="row gy-4">
          {addedServices.map((s, i) => (
            <div key={s.title} className="col-md-4">
              <div
                className={`hr-service-card card-float card-float-${i % 3} reveal ${"delay-" + ((i % 4) + 1)}`}
                data-reveal={i % 2 === 0 ? "right" : "left"}
                role="article"
                aria-label={s.title}
              >
                <div className="d-flex h-100">
                  <div className="hr-service-icon" aria-hidden="true">{s.icon}</div>

                  <div className="service-body">
                    <h6 className="fw-semibold mb-1 text-white">{s.title}</h6>
                    <p className="small">{s.benefit}</p>

                    <div className="service-btn-wrapper mt-auto">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleBookClick(s.title)}
                      >
                        Book Now
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
