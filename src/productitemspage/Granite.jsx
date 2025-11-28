import React from "react";
import "../styles/StoneCard.css";

import absoluteBlackGraniteImg from "../assets/productsitems/Granite/Absolute Black Granite.jpg";
import blackGalaxyGraniteImg from "../assets/productsitems/Granite/Black Galaxy Granite.jpg";
import kashmirWhiteGraniteImg from "../assets/productsitems/Granite/Kashmir White Granite.jpg";
import tanBrownGraniteImg from "../assets/productsitems/Granite/Tan Brown Granite.jpg";
import steelGreyGraniteImg from "../assets/productsitems/Granite/Steel Grey Granite.jpg";
import specialtyGranitesImg from "../assets/productsitems/Granite/Coloured  Specialty Granites.jpg";

// ✅ Your WhatsApp number
const PHONE_NUMBER = "918113001110";

const granites = [
  {
    name: "Absolute Black Granite",
    image: absoluteBlackGraniteImg,
    description: "Solid deep black with a sleek, modern look.",
  },
  {
    name: "Black Galaxy Granite",
    image: blackGalaxyGraniteImg,
    description: "Black base with shimmering gold and copper specks.",
  },
  {
    name: "Kashmir White Granite",
    image: kashmirWhiteGraniteImg,
    description: "Soft white and grey tones with subtle speckling.",
  },
  {
    name: "Tan Brown Granite",
    image: tanBrownGraniteImg,
    description: "Rich brown stone with black and grey flecks.",
  },
  {
    name: "Steel Grey Granite",
    image: steelGreyGraniteImg,
    description: "Contemporary dark grey with a fine, consistent pattern.",
  },
  {
    name: "Coloured / Specialty Granites",
    image: specialtyGranitesImg,
    description: "Unique shades and patterns for bold design statements.",
  },
];

function Granite() {
  return (
    <section className="py-5 stone-page granite-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Granite</h2>
        <p className="text-white-50 mb-4">
          Durable and practical stones ideal for kitchens, stairs, and exteriors.
        </p>

        <div className="row gy-4">
          {granites.map((item) => {
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

export default Granite;
