import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import absoluteBlackGraniteImg from "../assets/productsitems/Granite/Absolute Black Granite.jpg";
import blackGalaxyGraniteImg from "../assets/productsitems/Granite/Black Galaxy Granite.jpg";
import kashmirWhiteGraniteImg from "../assets/productsitems/Granite/Kashmir White Granite.jpg";
import tanBrownGraniteImg from "../assets/productsitems/Granite/Tan Brown Granite.jpg";
import steelGreyGraniteImg from "../assets/productsitems/Granite/Steel Grey Granite.jpg";
import specialtyGranitesImg from "../assets/productsitems/Granite/Coloured  Specialty Granites.jpg";

const PHONE_NUMBER = "918113001110";

const granites = [
  {
    name: "Absolute Black Granite",
    image: absoluteBlackGraniteImg,
    description: "Solid deep black with a mirror-like polish. The premier choice for modern modular kitchens.",
  },
  {
    name: "Black Galaxy Granite",
    image: blackGalaxyGraniteImg,
    description: "Black base studded with golden and copper crystals that shimmer under spotlighting.",
  },
  {
    name: "Steel Grey Granite",
    image: steelGreyGraniteImg,
    description: "Contemporary dark grey with fine, consistent crystalline texture. Highly stain-resistant.",
  },
  {
    name: "Kashmir White Granite",
    image: kashmirWhiteGraniteImg,
    description: "Soft white and subtle grey tones with garnet speckles for bright open-plan interiors.",
  },
  {
    name: "Tan Brown Granite",
    image: tanBrownGraniteImg,
    description: "Rich dark brown stone with black and grey mineral flecks. Heavy-duty durability.",
  },
  {
    name: "Specialty & Flamed Granites",
    image: specialtyGranitesImg,
    description: "Textured, leathered, and flamed finishes for slip-resistant outdoor verandas and steps.",
  },
];

function Granite() {
  return (
    <section className="py-5 stone-page granite-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Granite</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Premium Granite Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Heavy-duty, scratch-proof natural granite slabs in a variety of finishes. The gold standard for kitchen countertops, staircases, bathroom vanities, and exterior spaces in Kerala.
        </p>

        <ProductSchema items={granites} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Granite Varieties &amp; Finishes</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {granites.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Granite collection. Please share pricing and slab availability.`;
            const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              whatsappText
            )}`;

            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex" key={item.name}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100"
                  style={{ textDecoration: "none" }}
                  aria-label={`Inquire about ${item.name} on WhatsApp`}
                >
                  <div className="stone-card w-100">
                    <div className="stone-image-wrap">
                      <img
                        src={item.image}
                        className="stone-image"
                        alt={`${item.name} in Kannur showroom`}
                        loading="lazy"
                        width="300"
                        height="200"
                      />
                    </div>

                    <p className="stone-name mb-0">{item.name}</p>

                    <p className="stone-subtext text-white-50 mt-1">
                      {item.description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-5 p-4 rounded-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 className="fs-5 text-white mb-2">Planning a Kitchen Countertop or Staircase in Kannur?</h3>
          <p className="text-white-50 small mb-3">Get on-site measurement, edge profiling, and installation support from HOMEROCKS experts.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/get-measurement" className="btn btn-primary btn-sm">Book Free Measurement</Link>
            <Link to="/italian-marbles" className="btn btn-outline-light btn-sm">View Italian Marble</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Granite;
