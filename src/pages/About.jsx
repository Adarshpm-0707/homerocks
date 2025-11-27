import React, { useEffect, useRef } from "react";
import "../styles/About.css";

import warehouseImg from "../assets/wharehouse.png";
import processingImg from "../assets/factory.jpg";
import installedProjectImg from "../assets/installed-project.jpg";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Whole-section enter
    const sec = sectionRef.current;
    if (sec) {
      sec.classList.add("ab-section-enter");
      requestAnimationFrame(() => sec.classList.add("ab-section-in"));
    }

    // Scroll reveal (side-wise / up / fade)
    const revealEls = document.querySelectorAll(".about-root .reveal");
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
    <section ref={sectionRef} className="py-5 about-root">
      <div className="container position-relative">
        {/* floating aura */}
        <div className="ab-aura" aria-hidden="true" />

        <div className="row gy-4 align-items-start">
          {/* LEFT COLUMN – TEXT */}
          <div className="col-lg-7">
            <h2
              className="section-title text-white text-center text-lg-start fs-1 mb-3 reveal"
              data-reveal="left"
            >
              About HOMEROCKS
            </h2>

            <p className="mb-3 text-white reveal delay-1" data-reveal="left">
              HOMEROCKS was started with a simple idea – bring the world’s best
              stones closer to homeowners, architects, and builders with full
              transparency and support.
            </p>

            <p className="mb-3 text-white reveal delay-2" data-reveal="left">
              From Italian marble to exotic onyx and high-performance quartz,
              we carefully curate every lot, verify sourcing, and maintain
              strict quality checks at our warehouse and processing units.
            </p>

            <h5 className="fw-semibold text-white mt-4 mb-2 reveal" data-reveal="left">
              Why customers trust us
            </h5>
            <ul className="small text-white mb-4 reveal delay-1" data-reveal="left">
              <li>Direct sourcing from quarries and trusted partners.</li>
              <li>Transparent pricing with best price guarantee.</li>
              <li>
                End-to-end support – from selection and measurement to
                installation and polishing.
              </li>
              <li>Commitment to timelines, accuracy, and after-sales support.</li>
            </ul>

            <h5 className="fw-semibold text-white mb-2 reveal" data-reveal="left">
              Our Quality Check (QC) in 3 steps
            </h5>
            <ol className="small text-white mb-4 reveal delay-1" data-reveal="left">
              <li>Block & slab inspection at source.</li>
              <li>Processing & finishing check at factory.</li>
              <li>Final inspection before dispatch to site.</li>
            </ol>

            <h5 className="fw-semibold text-white mb-2 reveal" data-reveal="left">
              Our Sourcing Network
            </h5>
            <p className="small text-white mb-0 reveal delay-1" data-reveal="left">
              Italy, Turkey, Iran, India and other premium stone regions – so
              that your home gets only the finest materials.
            </p>
          </div>

          {/* RIGHT COLUMN – IMAGE GALLERY */}
          <div className="col-lg-5">
            <div className="hr-about-gallery">
              <div
                className="hr-about-img card-float card-float-0 reveal"
                data-reveal="right"
              >
                <img
                  src={warehouseImg}
                  alt="HOMEROCKS Warehouse"
                  className="hr-about-photo"
                />
                <span className="hr-about-label">Warehouse</span>
              </div>

              <div
                className="hr-about-img card-float card-float-1 reveal delay-1"
                data-reveal="right"
              >
                <img
                  src={processingImg}
                  alt="Processing / Factory"
                  className="hr-about-photo"
                />
                <span className="hr-about-label">Processing / Factory</span>
              </div>

              <div
                className="hr-about-img hr-about-img-wide card-float card-float-2 reveal delay-2"
                data-reveal="right"
              >
                <img
                  src={installedProjectImg}
                  alt="Installed Project"
                  className="hr-about-photo"
                />
                <span className="hr-about-label">Installed Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
