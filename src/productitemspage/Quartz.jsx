import React from "react";
import "../styles/StoneCard.css";

import clearQuartzImg from "../assets/productsitems/Quartz/Clear  Rock Crystal Quartz.jpg";
import roseQuartzImg from "../assets/productsitems/Quartz/Rose Quartz.jpg";
import smokyQuartzImg from "../assets/productsitems/Quartz/Smoky Quartz Slab.jpg";
import citrineQuartzImg from "../assets/productsitems/Quartz/Citrine (Yellow Quartz).jpg";
import whiteQuartzImg from "../assets/productsitems/Quartz/White  Light-Coloured Quartz.jpg";
import veinedQuartzImg from "../assets/productsitems/Quartz/Veined  Marble-Effect Quartz.jpg";
import greyQuartzImg from "../assets/productsitems/Quartz/Solid or Patterned Grey.jpg";
import coloredQuartzImg from "../assets/productsitems/Quartz/Colored  Custom-Pattern Quartz.jpg";

// WhatsApp number
const PHONE_NUMBER = "918113001110";

const quartzStones = [
  {
    name: "Clear / Rock Crystal Quartz",
    image: clearQuartzImg,
    description: "Pure, transparent quartz with a clean, elegant crystal look.",
  },
  {
    name: "Rose Quartz",
    image: roseQuartzImg,
    description: "Soft pink quartz symbolizing luxury, calm, and modern design.",
  },
  {
    name: "Smoky Quartz",
    image: smokyQuartzImg,
    description: "Warm grey-brown quartz with a smoky, stylish appearance.",
  },
  {
    name: "Citrine (Yellow Quartz)",
    image: citrineQuartzImg,
    description: "Golden-yellow quartz offering a bright, vibrant finish.",
  },
  {
    name: "White / Light-Coloured Quartz",
    image: whiteQuartzImg,
    description: "Clean white quartz perfect for minimal, modern interiors.",
  },
  {
    name: "Veined / Marble-Effect Quartz",
    image: veinedQuartzImg,
    description: "Marble-style veining with the durability of engineered quartz.",
  },
  {
    name: "Solid or Patterned Grey",
    image: greyQuartzImg,
    description: "Versatile grey tones suited for contemporary designs.",
  },
  {
    name: "Colored / Custom-Pattern Quartz",
    image: coloredQuartzImg,
    description: "Customizable colors and patterns for premium designer spaces.",
  },
];

function Quartz() {
  return (
    <section className="py-5 stone-page quartz-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Quartz</h2>
        <p className="text-white-50 mb-4">
          Engineered quartz options for modern, easy-maintenance surfaces.
        </p>

        <div className="row gy-4">
          {quartzStones.map((item) => {
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

export default Quartz;
