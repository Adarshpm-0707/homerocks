import React, { useRef, useState, useEffect } from "react";
import "../styles/Contact.css";
import mapImg from "../assets/map.webp";
import emailjs from "@emailjs/browser";

/* ===== Replace with your actual IDs (or use env vars) ===== */
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_mzp5rbu";
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_15fxrzp";
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "I0ik-Pbbt_affpzn8";
const NOTIFY_EMAIL = "homerockstpba@gmail.com";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [values, setValues] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });

  // Initialize EmailJS explicitly (helps some environments)
  useEffect(() => {
    try {
      if (PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
        console.log("EmailJS initialized with public key.");
      } else {
        console.warn("No EmailJS PUBLIC_KEY found. Make sure PUBLIC_KEY is set.");
      }
    } catch (err) {
      console.error("Error initializing EmailJS:", err);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const clearStatusAfter = (ms = 4000) => {
    setTimeout(() => setStatus({ type: "", message: "" }), ms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!values.from_name.trim() || !values.from_email.trim() || !values.phone.trim() || !values.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      clearStatusAfter(4000);
      return;
    }

    setLoading(true);

    try {
      console.log("Attempting emailjs.sendForm with:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      // sendForm returns a Promise with result (status, text)
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current);
      console.log("emailjs.sendForm success:", res);
      setStatus({ type: "success", message: "Enquiry submitted! We'll contact you shortly." });
      setValues({ from_name: "", from_email: "", phone: "", message: "" });
      clearStatusAfter(5000);
    } catch (err) {
      // Log everything we can about the error
      console.error("emailjs.sendForm failed:", err);
      // emailjs error objects sometimes include status/text or a message property
      try {
        console.log("Error details:", {
          name: err.name,
          message: err.message,
          status: err.status,
          text: err.text || err.response || err.details,
        });
      } catch (logErr) {
        console.error("Error logging inner details:", logErr);
      }

      // Try fallback send() with explicit params (useful if template expects different keys)
      try {
        console.log("Trying fallback emailjs.send(...) with templateParams");
        const templateParams = {
          from_name: values.from_name,
          from_email: values.from_email,
          phone: values.phone,
          message: values.message,
          submitted_at: new Date().toLocaleString(),
          to_email: NOTIFY_EMAIL,
        };
        const fallback = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        console.log("emailjs.send fallback success:", fallback);
        setStatus({ type: "success", message: "Enquiry submitted! We'll contact you shortly." });
        setValues({ from_name: "", from_email: "", phone: "", message: "" });
        clearStatusAfter(5000);
      } catch (err2) {
        console.error("Fallback send failed:", err2);
        // Put the raw error message in UI so you can paste it here
        const friendly = err2 && err2.text ? err2.text : err2 && err2.message ? err2.message : String(err2);
        setStatus({
          type: "error",
          message: `Sending failed. ${friendly} (Check EmailJS IDs & template configuration.)`,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="section-title fs-1 text-white text-center mb-3">Contact Us</h2>
        <p className="text-white text-center mb-5">
          Visit our showroom / warehouse or contact us for product details,
          pricing, and project support.
        </p>

        <div className="row gy-4 align-items-start">
          <div className="col-lg-5">
            <h5 className="fw-semibold mb-3 fs-1 text-white">Reach Us</h5>
            <p className="mb-1 text-white"><strong>Phone:</strong> +91 8113001110</p>
            <p className="mb-1 text-white"><strong>Address:</strong> HOMEROCKS, Kuppam, Taliparamba, Kannur, Kerala 670502</p>
            <p className="mb-3 text-white"><strong>Business hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM</p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a href={`https://wa.me/918113001110`} target="_blank" rel="noreferrer" className="btn btn-outline-primary">WhatsApp Chat</a>
            </div>
            <div className="hr-map-image mt-2">
              <a href="https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc" target="_blank" rel="noreferrer">
                <img src={mapImg} alt="Map Location" className="img-fluid hr-map-photo" />
              </a>
            </div>
          </div>

          <div className="col-lg-7">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-card p-4">
              <h5 className="fw-semibold mb-3 text-white">Enquiry Form</h5>

              <div className="mb-3">
                <label className="form-label text-white">Full Name</label>
                <input name="from_name" value={values.from_name} onChange={handleChange} type="text" className="form-control" placeholder="Your full name" required />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Email</label>
                <input name="from_email" value={values.from_email} onChange={handleChange} type="email" className="form-control" placeholder="you@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Phone</label>
                <input name="phone" value={values.phone} onChange={handleChange} type="tel" className="form-control" placeholder="+91 8xxxxxxxxx" required />
              </div>

              <div className="mb-3">
                <label className="form-label text-white">Message</label>
                <textarea name="message" value={values.message} onChange={handleChange} rows="4" className="form-control" placeholder="Write your enquiry..." required />
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>

              {status.type === "success" && <div className="alert alert-success mt-3">{status.message}</div>}
              {status.type === "error" && <div className="alert alert-danger mt-3">{status.message}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
