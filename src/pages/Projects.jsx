import React, { useState } from "react";
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
    name: "Luxury Villa - Italian Marble",
    type: "Villas",
    area: "Living Room & Staircase",
  },
  {
    name: "Premium Apartment",
    type: "Apartments",
    area: "Living Room & Kitchen",
  },
  {
    name: "Boutique Hotel Lobby",
    type: "Hotels",
    area: "Lobby & Reception",
  },
  {
    name: "Modern Kitchen",
    type: "Kitchen",
    area: "Countertop & Backsplash",
  },
  {
    name: "Spa Bathroom",
    type: "Bathroom",
    area: "Flooring & Walls",
  },
  {
    name: "Grand Staircase",
    type: "Staircase",
    area: "Steps & Risers",
  },
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="py-5 ">
      <div className="container">
        <h2 className="section-title mb-3 text-white text-center">Projects & Gallery</h2>
        <p className="text-white text-center mb-4">
          Real homes, villas, hotels, and spaces transformed with HOMEROCKS
          materials.
        </p>

        <div className="d-flex flex-wrap justify-content-center  gap-2 mb-4">
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
              <div className="hr-project-card">
                <div className="hr-project-image ">Project Image</div>
                <div className="p-3">
                  <h6 className="fw-semibold mb-1">{p.name}</h6>
                  <p className="small text-muted mb-1">{p.type}</p>
                  <p className="small mb-0">{p.area}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-center text-white">
              No projects found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
