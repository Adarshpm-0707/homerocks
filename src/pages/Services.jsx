import React from "react";
import "../styles/Services.css";

const standardServices = [
  {
    icon: "📏",
    title: "Home measurement",
    benefit: "Accurate on-site measuring to avoid wastage and rework.",
  },
  {
    icon: "🧱",
    title: "Installation",
    benefit: "Trusted teams trained specifically for stone installation.",
  },
  {
    icon: "✨",
    title: "Polishing",
    benefit: "Machine and hand polishing for mirror-finish floors.",
  },
  {
    icon: "🧑‍💼",
    title: "Material consultation",
    benefit: "Suggest best stones for budget, usage, and maintenance.",
  },
  {
    icon: "🏢",
    title: "Commercial project support",
    benefit: "Bulk sourcing and site coordination for large projects.",
  },
];

const addedServices = [
  {
    icon: "🚐",
    title: "Shuttle Service",
    benefit: "Pickup & drop for clients visiting showroom/warehouse.",
  },
  {
    icon: "👷",
    title: "Supervision for installation",
    benefit: "On-site expert to guide contractors during execution.",
  },
  {
    icon: "📐",
    title: "On-site expert guidance",
    benefit:
      "Ensure correct laying pattern, slope, adhesives, and finishing.",
  },
];

function Services() {
  const whatsappNumber = "918547321372";

  const handleBookClick = (serviceTitle) => {
    const message = `Hello, I want to book the service: ${serviceTitle}`;
    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);
    window.open(url, "_blank");
  };

  return (
    <section className="py-5 ">
      <div className="container">
        <h1 className="section-title mb-3 text-center text-white fs-1">Our Services</h1>
        <p className="text-white text-center mb-5">
          From choosing the right stone to final polishing, HOMEROCKS is with
          you at every step.
        </p>

        <h4 className="fw-semibold text-white mb-3">Standard Services</h4>
        <div className="row gy-4 mb-5">
          {standardServices.map((s) => (
            <div key={s.title} className="col-md-4">
              <div className="hr-service-card">
                <div className="d-flex align-items-start h-100">
                  <div className="hr-service-icon me-3">{s.icon}</div>
                  <div className="service-body">
                    <h6 className="fw-semibold mb-1">{s.title}</h6>
                    <p className="small mb-3">{s.benefit}</p>

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

        <h4 className="fw-semibold text-white mb-3">Added Services</h4>
        <div className="row gy-4">
          {addedServices.map((s) => (
            <div key={s.title} className="col-md-4">
              <div className="hr-service-card">
                <div className="d-flex align-items-start h-100">
                  <div className="hr-service-icon me-3">{s.icon}</div>
                  <div className="service-body">
                    <h6 className="fw-semibold mb-1">{s.title}</h6>
                    <p className="small mb-3">{s.benefit}</p>

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
