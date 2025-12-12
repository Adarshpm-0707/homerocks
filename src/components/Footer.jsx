import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="hr-footer mt-5">
      <div className="container py-4 py-md-5">
        <div className="row gy-4">

          {/* Column 1 – Logo + About */}
          {/* On mobile: order-3 (bottom) / On md+ : order-md-1 (first) */}
          <div className="col-md-4 text-center text-md-start order-3 order-md-1">
            <img
              src={logo}
              alt="HOMEROCKS Logo"
              className="footer-logo mb-3"
            />
            <p className="small mb-2">
              Premium stones, expert installation, and complete project support
              for luxury homes and commercial spaces.
            </p>
            <p className="small mb-0">
              © {new Date().getFullYear()} HOMEROCKS. All rights reserved.
            </p>
          </div>

          {/* Column 2 – Links */}
          {/* On mobile: order-1 (top) / On md+ : order-md-2 (middle) */}
          <div className="col-md-4 text-center text-md-start order-1 order-md-2">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small footer-links-list">
              <li>
                <Link to="/products" className="hr-footer-link">
                  View Collections
                </Link>
              </li>
              <li>
                <Link to="/services" className="hr-footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hr-footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/get-measurement" className="hr-footer-link">
                  Get Measurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Contact */}
          {/* On mobile: order-2 / On md+ : order-md-3 (right) */}
          <div className="col-md-4 text-center text-md-start order-2 order-md-3">
            <h6 className="fw-semibold mb-3">Contact</h6>

            <p className="small mb-1">Phone: +91 8113001110</p>

            <p className="small mb-1">
              WhatsApp:{" "}
              <a
                href="https://wa.me/918113001110?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection."
                target="_blank"
                rel="noreferrer"
                className="hr-footer-link"
              >
                +91 8113001110
              </a>
            </p>

            <p className="small mt-2">
              Visit our showroom :<br />
              HOMEROCKS, kuppam, Taliparamba, Kannur, Kerala 670502
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
