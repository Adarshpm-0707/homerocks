import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import clearQuartzImg from "../assets/productsitems/Quartz/Clear  Rock Crystal Quartz.jpg";
import roseQuartzImg from "../assets/productsitems/Quartz/Rose Quartz.jpg";
import smokyQuartzImg from "../assets/productsitems/Quartz/Smoky Quartz Slab.jpg";
import citrineQuartzImg from "../assets/productsitems/Quartz/Citrine (Yellow Quartz).jpg";
import whiteQuartzImg from "../assets/productsitems/Quartz/White  Light-Coloured Quartz.jpg";
import veinedQuartzImg from "../assets/productsitems/Quartz/Veined  Marble-Effect Quartz.jpg";
import greyQuartzImg from "../assets/productsitems/Quartz/Solid or Patterned Grey.jpg";
import coloredQuartzImg from "../assets/productsitems/Quartz/Colored  Custom-Pattern Quartz.jpg";

const PHONE_NUMBER = "918113001110";

const quartzStones = [
  {
    name: "Veined Marble-Effect Quartz",
    image: veinedQuartzImg,
    description: "Calacatta and Carrara-inspired veining with zero maintenance and stain resistance.",
  },
  {
    name: "Pure White Quartz",
    image: whiteQuartzImg,
    description: "Clean, consistent white engineered quartz for minimalist kitchen countertops.",
  },
  {
    name: "Solid & Patterned Grey Quartz",
    image: greyQuartzImg,
    description: "Versatile industrial and contemporary grey tones for heavy-use spaces.",
  },
  {
    name: "Clear Crystal Quartz",
    image: clearQuartzImg,
    description: "Reflective crystalline engineered stone with elegant depth.",
  },
  {
    name: "Rose Quartz",
    image: roseQuartzImg,
    description: "Soft pink tones designed for luxury vanity counters and bespoke accent tops.",
  },
  {
    name: "Smoky Quartz Slab",
    image: smokyQuartzImg,
    description: "Warm grey-brown stone providing a moody, stylish modern aesthetic.",
  },
  {
    name: "Citrine Quartz",
    image: citrineQuartzImg,
    description: "Warm golden hues offering an energetic, illuminated look.",
  },
  {
    name: "Colored / Custom-Pattern Quartz",
    image: coloredQuartzImg,
    description: "Tailored pigments and textures for designer residential and commercial projects.",
  },
];

function Quartz() {
  return (
    <section className="py-5 stone-page quartz-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Quartz</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Engineered Quartz Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Non-porous, stain-proof engineered quartz surfaces crafted for modern kitchens, vanity tops, and low-maintenance luxury interiors.
        </p>

        <ProductSchema items={quartzStones} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Quartz Countertop Varieties</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {quartzStones.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Quartz collection. Please share pricing and slab availability.`;
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

export default Quartz;
