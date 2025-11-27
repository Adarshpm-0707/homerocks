import React, { useState } from "react";
import "../styles/GetMeasurement.css";

function GetMeasurement() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    areaDetails: "",
    materialPreference: "",
    timeSlot: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-5 ">
      <div className="container ">
        <h2 className="section-title text-center fs-1 text-white mb-3">
          Book Home Measurement
        </h2>
        <p className="text-white text-center mb-4">
          Share your details and our team will visit your site for accurate
          measurement and stone suggestions.
        </p>

        <div className="row gy-4">
          {/* LEFT: FORM */}
          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="hr-card gm-card p-4">
              <div className="mb-3">
                <label className="form-label gm-label">Full name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="form-control gm-input"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label gm-label">Location</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text"
                  className="form-control gm-input"
                  placeholder="City / Area / Landmark"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label gm-label">Area details</label>
                <textarea
                  name="areaDetails"
                  value={formData.areaDetails}
                  onChange={handleChange}
                  rows="3"
                  className="form-control gm-input"
                  placeholder="e.g. 3BHK apartment flooring, 2 bathrooms, staircase"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label gm-label">Material preference</label>
                <input
                  name="materialPreference"
                  value={formData.materialPreference}
                  onChange={handleChange}
                  type="text"
                  className="form-control gm-input"
                  placeholder="e.g. Italian marble, quartz, or granite"
                />
              </div>

              <div className="mb-3">
                <label className="form-label gm-label">Preferred time slot</label>
                <input
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  type="text"
                  className="form-control gm-input"
                  placeholder="e.g. Weekdays 3–6 PM"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label gm-label">WhatsApp number</label>
                <input
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  type="tel"
                  className="form-control gm-input"
                  required
                />
                
              </div>

              <button type="submit" className="btn btn-primary">
                Confirm Measurement
              </button>
            </form>

            {submitted && (
              <div className="alert alert-success mt-3">
                Thank you! Your measurement request has been received. You will
                get a WhatsApp auto-confirmation shortly.
              </div>
            )}
          </div>

          {/* RIGHT: SIDE INFO CARD */}
          <div className="col-lg-5">
            <div className="hr-card gm-card p-4 gm-side-card">
              <h5 className="fw-semibold mb-2 text-white">
                What happens next?
              </h5>
              <ol className="small mb-3 gm-list">
                <li>Our team will call/WhatsApp to confirm your slot.</li>
                <li>An expert will visit the site for measurement.</li>
                <li>
                  Based on usage & budget, we suggest the right stones and
                  finishes.
                </li>
              </ol>
              <p className="small mb-0 text-white">
                Need urgent support? Call or WhatsApp us directly and mention{" "}
                <strong>“Measurement Request”</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetMeasurement;
