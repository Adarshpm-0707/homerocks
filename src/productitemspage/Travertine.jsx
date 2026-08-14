import React from "react";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import ivoryTravertineImg from "../assets/productsitems/Travertine/Travertine Beige marble.jpg";
import noceTravertineImg from "../assets/productsitems/Travertine/Noce Travertine.jpg";
import silverTravertineImg from "../assets/productsitems/Travertine/Sver Travertine.jpg";
import goldenTravertineImg from "../assets/productsitems/Travertine/Golden Travertine.jpg";
import rusticTravertineImg from "../assets/productsitems/Travertine/Rustic  Natural Travertine.jpg";
import classicTravertineImg from "../assets/productsitems/Travertine/Classic  Regional Varieties.jpg";

const PHONE_NUMBER = "918113001110"; // Your WhatsApp number

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
        <h2 className="stone-title text-white mb-3">Travertine</h2>
        <p className="text-white-50 mb-4">
          Warm, textured stones ideal for earthy and timeless interiors.
        </p>
        
        <ProductSchema items={travertineStones} />

        <div className="row gy-4">
          {travertineStones.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name}. Please share more details.`;
            const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              whatsappText
            )}`;

            return (
              <div className="col-6 col-md-3 d-flex" key={item.name}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100"
                  style={{ textDecoration: "none" }}
                >
                  <div className="stone-card w-100">
                    <div className="stone-image-wrap">
                      <img
                        src={item.image}
                        className="stone-image"
                        alt={item.name}
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
