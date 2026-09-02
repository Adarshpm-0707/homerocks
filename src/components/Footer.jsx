import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="hr-footer mt-5 border-top border-white-10">
      <div className="container py-5">
        <div className="row gy-4">

          {/* Column 1 – Logo + About */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <Link to="/" aria-label="HOMEROCKS Home">
              <img
                src={logo}
                alt="HOMEROCKS Logo - Premium Marble & Granite Showroom"
                className="footer-logo mb-3"
                loading="lazy"
                width="160"
                height="42"
              />
            </Link>
            <p className="small text-white-50 mb-2">
              North Malabar's largest showroom for imported marbles and granites. Proud member of the Aleef Group (Est. 1995).
            </p>
            <p className="small text-white-50 mb-0">
              © {new Date().getFullYear()} HOMEROCKS. All rights reserved.
            </p>
          </div>

          {/* Column 2 – Stone Collections (Marble & Granite Internal Links) */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h6 className="fw-bold text-white mb-3">Stone Collections</h6>
            <ul className="list-unstyled small footer-links-list">
              <li className="mb-2">
                <Link to="/italian-marbles" className="hr-footer-link">
                  Italian Marble Collection
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/granite" className="hr-footer-link">
                  Premium Granite Slabs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/exotic-marbles" className="hr-footer-link">
                  Exotic Marbles
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/onyx" className="hr-footer-link">
                  Backlit Onyx Slabs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/travertine" className="hr-footer-link">
                  Travertine Cladding
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/quartzite" className="hr-footer-link">
                  Natural Quartzite
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/indian-marbles" className="hr-footer-link">
                  Premium Indian Marbles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Company & Quick Links */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h6 className="fw-bold text-white mb-3">Company &amp; Services</h6>
            <ul className="list-unstyled small footer-links-list">
              <li className="mb-2">
                <Link to="/about" className="hr-footer-link">
                  About HOMEROCKS
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="hr-footer-link">
                  Projects &amp; Sites
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hr-footer-link">
                  Installation &amp; Polishing
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/get-measurement" className="hr-footer-link">
                  Free Site Measurement
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hr-footer-link">
                  Stone Journal &amp; Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/showcase" className="hr-footer-link">
                  Instagram Showcase
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hr-footer-link">
                  Contact Showroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 – Contact & Location */}
          <div className="col-lg-3 col-md-6 text-center text-md-start">
            <h6 className="fw-bold text-white mb-3">Visit &amp; Contact</h6>

            <p className="small mb-1 text-white-50">
              <strong className="text-white">Phone:</strong>{" "}
              <a href="tel:+918113001110" className="hr-footer-link">
                +91 8113001110
              </a>
            </p>

            <p className="small mb-1 text-white-50">
              <strong className="text-white">WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/918113001110?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection."
                target="_blank"
                rel="noreferrer"
                className="hr-footer-link"
              >
                +91 8113001110
              </a>
            </p>

            <p className="small mb-2 text-white-50">
              <strong className="text-white">Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/homerocksindia"
                target="_blank"
                rel="noreferrer"
                className="hr-footer-link"
              >
                @homerocksindia
              </a>
            </p>

            <p className="small mt-2 text-white-50">
              <strong className="text-white">Experience Center:</strong><br />
              HOMEROCKS, Kuppam, Taliparamba, Kannur, Kerala 670502
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
