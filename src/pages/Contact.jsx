import React from "react";
import "../styles/Contact.css";
import mapImg from "../assets/map.png";

function Contact() {
  const whatsappLink =
    "https://wa.me/918547321372?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20stone%20collection.";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry submitted! We will contact you shortly.");
  };

  return (
    <section className="py-5">
      <div className="container">
        {/* Page Title */}
        <h2 className="section-title text-white text-center mb-3">Contact Us</h2>
        <p className="text-white text-center mb-5">
          Visit our showroom / warehouse or contact us for product details,
          pricing, and project support.
        </p>

        <div className="row gy-4 align-items-start">
          {/* LEFT COLUMN - DETAILS + MAP */}
          <div className="col-lg-5">
            <h5 className="fw-semibold mb-3 text-white">Reach Us</h5>

            <p className="mb-1 text-white">
              <strong>Phone:</strong> +91 85473 21372
            </p>

         
            <p className="mb-1 text-white">
              <strong>Address:</strong> HOMEROCKS, Kuppam, Taliparamba,
              Marathakkad, Kerala 670502
            </p>

            <p className="mb-3 text-white">
              <strong>Business hours:</strong> Mon–Sat, 10:00 AM – 7:00 PM
            </p>

            <div className="d-flex flex-wrap gap-2 mb-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                WhatsApp Chat
              </a>

              <button
                className="btn btn-outline-primary"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                Book Shuttle Service
              </button>
            </div>

            {/* Clickable Map Image */}
            <div className="hr-map-image mt-2">
              <a
                href="https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={mapImg}
                  alt="Map Location"
                  className="img-fluid hr-map-photo"
                />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="hr-card p-4">
              <h5 className="fw-semibold mb-3">Enquiry Form</h5>

              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea rows="4" className="form-control" required />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
