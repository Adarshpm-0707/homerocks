import React, { useState } from "react";
import "../styles/GetMeasurement.css";

// 🔴 Paste the Web App URL you copied from Apps Script deployment here:
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfwVhO6qHZanzKxCEfsLUBo5aNluz4iGAgsaOLc983uT_1Wbo59K0y6hbwwOo2om96/exec";

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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Using form-encoded POST (URLSearchParams) to avoid CORS preflight issues in many setups
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError("");
    setLoading(true);

    try {
      const params = new URLSearchParams();
      params.append("name", formData.name || "");
      params.append("location", formData.location || "");
      params.append("areaDetails", formData.areaDetails || "");
      params.append("materialPreference", formData.materialPreference || "");
      params.append("timeSlot", formData.timeSlot || "");
      params.append("whatsapp", formData.whatsapp || "");

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: params.toString(),
      });

      const text = await res.text();
      console.log("Apps Script response:", res.status, text);

      if (!res.ok) {
        throw new Error(`Submit failed: ${res.status} — ${text}`);
      }

      // Try parse JSON result (best-effort)
      try {
        const json = JSON.parse(text || "{}");
        if (json.status && json.status !== "success") {
          throw new Error(json.message || "Apps Script returned an error");
        }
      } catch (parseErr) {
        // ignore parse errors when empty body
      }

      setSubmitted(true);
      setFormData({
        name: "",
        location: "",
        areaDetails: "",
        materialPreference: "",
        timeSlot: "",
        whatsapp: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      // show a short friendly message to the user but log details to console
      setError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5 ">
      <div className="container ">
        <h1 className="section-title text-center fs-1 text-white mb-3">
          Book Free Stone Measurement in Kannur
        </h1>
        <h2 className="text-white-50 text-center mb-4 fs-6 fw-normal max-w-700 mx-auto">
          Share your project details and our stone specialist will visit your site across North Malabar for accurate measurement, wastage calculation, and material suggestions.
        </h2>

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

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Submitting..." : "Confirm Measurement"}
              </button>
            </form>

            {submitted && (
              <div className="alert alert-success mt-3">
                Thank you! Your measurement request has been received. You will
                get a WhatsApp auto-confirmation shortly.
              </div>
            )}

            {error && (
              <div className="alert alert-danger mt-3">
                {error}
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
