import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import whiteOnyxImg from "../assets/productsitems/Onyx/White Onyx.jpg";
import honeyOnyxImg from "../assets/productsitems/Onyx/Honey Onyx.jpg";
import blueOnyxImg from "../assets/productsitems/Onyx/Blue Onyx.jpg";
import greenOnyxImg from "../assets/productsitems/Onyx/Green Onyx.jpg";
import blackOnyxImg from "../assets/productsitems/Onyx/Black Onyx.jpg";
import pinkOnyxImg from "../assets/productsitems/Onyx/Pink Onyx.jpg";

const PHONE_NUMBER = "918113001110";

const onyxStones = [
  {
    name: "White Onyx",
    image: whiteOnyxImg,
    description: "Elegant translucent stone with soft white and cream tones.",
  },
  {
    name: "Honey Onyx",
    image: honeyOnyxImg,
    description: "Warm golden shades with natural glowing translucency.",
  },
  {
    name: "Blue Onyx",
    image: blueOnyxImg,
    description: "Rare blue-toned onyx with stunning cloudy patterns.",
  },
  {
    name: "Green Onyx",
    image: greenOnyxImg,
    description: "Fresh green hues with soft flowing veins—very luxurious.",
  },
  {
    name: "Black Onyx",
    image: blackOnyxImg,
    description: "Dramatic dark stone with smooth texture and depth.",
  },
  {
    name: "Pink Onyx",
    image: pinkOnyxImg,
    description: "Delicate rosy tones perfect for elegant feature walls.",
  },
];

function Onyx() {
  return (
    <section className="py-5 stone-page onyx-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Onyx</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Backlit Onyx Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Translucent onyx slabs designed specifically for illuminated bar counters, backlit luxury feature walls, and bespoke luxury highlights.
        </p>

        <ProductSchema items={onyxStones} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Onyx Slab Varieties</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {onyxStones.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Onyx collection. Please share pricing and slab availability.`;
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

export default Onyx;
