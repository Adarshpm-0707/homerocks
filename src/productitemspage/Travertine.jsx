import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import ivoryTravertineImg from "../assets/productsitems/Travertine/Travertine Beige marble.jpg";
import noceTravertineImg from "../assets/productsitems/Travertine/Noce Travertine.jpg";
import silverTravertineImg from "../assets/productsitems/Travertine/Sver Travertine.jpg";
import goldenTravertineImg from "../assets/productsitems/Travertine/Golden Travertine.jpg";
import rusticTravertineImg from "../assets/productsitems/Travertine/Rustic  Natural Travertine.jpg";
import classicTravertineImg from "../assets/productsitems/Travertine/Classic  Regional Varieties.jpg";

const PHONE_NUMBER = "918113001110";

const travertineStones = [
  {
    name: "Ivory / Beige Travertine",
    image: ivoryTravertineImg,
    description: "Soft beige tones with natural pores—perfect for warm interiors.",
  },
  {
    name: "Noce Travertine",
    image: noceTravertineImg,
    description: "Rich brown travertine with earthy depth and character.",
  },
  {
    name: "Silver Travertine",
    image: silverTravertineImg,
    description: "Elegant grey shades with subtle streaks and natural texture.",
  },
  {
    name: "Golden / Yellow Travertine",
    image: goldenTravertineImg,
    description: "Warm gold tones ideal for rustic luxury and bright spaces.",
  },
  {
    name: "Rustic / Natural Travertine",
    image: rusticTravertineImg,
    description: "Unfilled, raw-textured travertine for an authentic natural look.",
  },
  {
    name: "Classic / Regional Varieties",
    image: classicTravertineImg,
    description: "Traditional travertine styles sourced from regional quarries.",
  },
];

function Travertine() {
  return (
    <section className="py-5 stone-page travertine-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Travertine</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Travertine Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Warm, textured natural travertine stones ideal for exterior facades, architectural wall cladding, and earthy, timeless interiors.
        </p>

        <ProductSchema items={travertineStones} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Travertine Finishes &amp; Slabs</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {travertineStones.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Travertine collection. Please share pricing and slab availability.`;
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
                        alt={`${item.name} in Kannur`}
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
      </div>
    </section>
  );
}

export default Travertine;
