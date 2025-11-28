import React from "react";
import "../styles/StoneCard.css";

import makranaImg from "../assets/productsitems/Premium Indian Marbles/Makrana Marble.jpg";
import ambajiWhiteImg from "../assets/productsitems/Premium Indian Marbles/Ambaji White Marble.jpg";
import indianGreenImg from "../assets/productsitems/Premium Indian Marbles/Indian Green Marble.jpg";
import abuBlackImg from "../assets/productsitems/Premium Indian Marbles/Abu Black Marble.jpg";
import indianSpecialtyImg from "../assets/productsitems/Premium Indian Marbles/Indian Green Marble.jpg";

// WhatsApp Number
const PHONE_NUMBER = "918113001110";

// Added meaningful descriptions for each stone
const indianMarbles = [
  {
    name: "Makrana Marble",
    image: makranaImg,
    description: "Iconic white marble used in the Taj Mahal; extremely durable.",
  },
  {
    name: "Ambaji White Marble",
    image: ambajiWhiteImg,
    description: "Pure white marble with soft grain—ideal for elegant interiors.",
  },
  {
    name: "Indian Green Marble",
    image: indianGreenImg,
    description: "Rich green tones with natural patterns; highly polished finish.",
  },
  {
    name: "Abu Black Marble",
    image: abuBlackImg,
    description: "Dark black marble with subtle grains—perfect for contrast décor.",
  },
  {
    name: "Coloured & Specialty",
    image: indianSpecialtyImg,
    description: "Unique Indian marbles available in vibrant natural shades.",
  },
];

function PremiumIndianMarbles() {
  return (
    <section className="py-5 stone-page indian-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Premium Indian Marbles</h2>
        <p className="text-white-50 mb-4">
          Iconic Indian marbles known for heritage, durability, and beauty.
        </p>

        <div className="row gy-4">
          {indianMarbles.map((item) => {
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

export default PremiumIndianMarbles;
