import React, { useState } from "react";
import { Link } from "react-router-dom";
import InstagramShowcase from "../components/InstagramShowcase";
import "../styles/Projects.css";

const filters = [
  "All",
  "Villas",
  "Apartments",
  "Hotels",
  "Kitchen",
  "Living Room",
  "Bathroom",
  "Staircase",
];

const projects = [
  {
    name: "Luxury Villa - Italian Statuario Marble",
    type: "Villas",
    area: "Living Room & Grand Staircase",
    desc: "Book-matched Statuario marble flooring creating seamless light reflection throughout the main hall.",
  },
  {
    name: "Premium Apartment - Calacatta Gold",
    type: "Apartments",
    area: "Living Room & Kitchen Island",
    desc: "Calacatta Gold countertops paired with durable porcelain and quartz for modern urban living.",
  },
  {
    name: "Boutique Hotel - Backlit Onyx Lobby",
    type: "Hotels",
    area: "Lobby & Reception Feature Wall",
    desc: "Illuminated honey onyx reception desk making an unforgettable visual statement for guests.",
  },
  {
    name: "Modern Kitchen - Absolute Black Granite",
    type: "Kitchen",
    area: "Countertop & Backsplash",
    desc: "Mirror-finish deep black granite resistant to high heat, spice stains, and knife scratches.",
  },
  {
    name: "Spa Bathroom - Travertine & Quartzite",
    type: "Bathroom",
    area: "Flooring & Shower Enclosure",
    desc: "Honed beige travertine wall cladding providing a soothing, organic spa environment.",
  },
  {
    name: "Grand Staircase - Steel Grey & Onyx Accents",
    type: "Staircase",
    area: "Steps, Risers & Inlays",
    desc: "Heavy-duty bevelled steel grey granite treads with custom under-step ambient illumination.",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* Projects Gallery Section */}
      <section className="py-5">
        <div className="container">
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb small">
              <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
              <li className="breadcrumb-item active text-warning" aria-current="page">Projects</li>
            </ol>
          </nav>

          <h1 className="section-title mb-3 text-white text-center fs-1">
            Projects &amp; Completed Sites in Kerala
          </h1>
          <p className="text-white-50 text-center mb-4 max-w-700 mx-auto">
            Explore luxury homes, villas, boutique hotels, and premium residential spaces transformed with HOMEROCKS imported marbles and granites.
          </p>

          <h2 className="fs-5 text-white text-center mb-3">Filter by Space &amp; Application</h2>

          <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {filters.map((f) => (
              <button
                key={f}
                className={`btn btn-sm text-white hr-filter-btn ${
                  activeFilter === f ? "hr-filter-btn-active" : ""
                }`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="row gy-4">
            {filteredProjects.map((p) => (
              <div key={p.name} className="col-md-4">
                <div className="hr-project-card p-4 rounded-4" style={{ background: "rgba(18, 24, 38, 0.8)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-warning text-dark">{p.type}</span>
                    <span className="small text-white-50">{p.area}</span>
                  </div>
                  <h3 className="fw-bold fs-6 text-white mb-2">{p.name}</h3>
                  <p className="small text-white-50 mb-3">{p.desc}</p>
                  <Link to="/get-measurement" className="small text-warning text-decoration-none fw-semibold">
                    Request Similar Installation &rarr;
                  </Link>
                </div>
              </div>
            ))}
            {filteredProjects.length === 0 && (
              <p className="text-center text-white">
                No projects found for this category.
              </p>
            )}
          </div>

          <div className="text-center mt-5">
            <Link to="/get-measurement" className="btn btn-primary me-3">
              Book Site Measurement
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Contact Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Showcase Section */}
      <InstagramShowcase />
    </>
  );
}

export default Projects;
