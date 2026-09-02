import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import makranaImg from "../assets/productsitems/Premium Indian Marbles/Makrana Marble.jpg";
import ambajiImg from "../assets/productsitems/Premium Indian Marbles/Ambaji White Marble.jpg";
import indianGreenImg from "../assets/productsitems/Premium Indian Marbles/Indian Green Marble.jpg";
import abuBlackImg from "../assets/productsitems/Premium Indian Marbles/Abu Black Marble.jpg";
import specialtyImg from "../assets/productsitems/Premium Indian Marbles/Coloured & Specialty.jpg";

const PHONE_NUMBER = "918113001110";

const indianMarbles = [
  {
    name: "Makrana Pure White Marble",
    image: makranaImg,
    description: "Legendary Indian white marble with 98%+ calcium content and unmatched longevity.",
  },
  {
    name: "Ambaji White Marble",
    image: ambajiImg,
    description: "Pristine white stone with gentle grey-blue streaks, great for pooja rooms and living areas.",
  },
  {
    name: "Indian Green Marble",
    image: indianGreenImg,
    description: "Deep forest-green serpentine stone with rich natural veining.",
  },
  {
    name: "Abu Black Marble",
    image: abuBlackImg,
    description: "Solid, dense dark Indian marble suitable for borders, steps, and flooring accents.",
  },
  {
    name: "Coloured & Specialty Indian Stones",
    image: specialtyImg,
    description: "Traditional colored marbles sourced from Rajasthan's finest quarries.",
  },
];

function PremiumIndianMarbles() {
  return (
    <section className="py-5 stone-page indian-marble-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Indian Marbles</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Premium Indian Marbles in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Timeless Indian marble varieties sourced directly from Rajasthan's historic quarries including Makrana and Ambaji.
        </p>

        <ProductSchema items={indianMarbles} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Indian Marble Varieties</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {indianMarbles.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Indian Marble collection. Please share pricing and slab availability.`;
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

export default PremiumIndianMarbles;
