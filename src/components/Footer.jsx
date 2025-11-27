import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // make sure file name + path are correct
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="hr-footer mt-5">
      <div className="container py-4 py-md-5">
        <div className="row gy-4">

          {/* Column 1 – Logo + About */}
          <div className="col-md-4 text-center text-md-start">
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
          <div className="col-md-4 text-center text-md-start">
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
          <div className="col-md-4 text-center text-md-start">
            <h6 className="fw-semibold mb-3">Contact</h6>

            <p className="small mb-1">Phone: +91 85473 21372</p>

            <p className="small mb-1">
              WhatsApp:{" "}
              <a
                href="https://wa.me/918547321372?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection."
                target="_blank"
                rel="noreferrer"
                className="hr-footer-link"
              >
                +91 85473 21372
              </a>
            </p>

            <p className="small mt-2 ">
              Visit our showroom :<br />
              HOMEROCKS, kuppam, Taliparamba, Marathakkad, Kerala 670502
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
