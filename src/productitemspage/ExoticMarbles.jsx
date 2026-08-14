import React from "react";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import neroMarquinaImg from "../assets/productsitems/Exotic Marbles/Nero Marquina Marble.jpg";
import emperadorImg from "../assets/productsitems/Exotic Marbles/Emperador Marble.jpg";
import fantasyBrownImg from "../assets/productsitems/Exotic Marbles/Fantasy Brown Marble.jpg";
import carraraImg from "../assets/productsitems/italian marble/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/italian marble/Calacatta Marble.jpg";
import statuarioImg from "../assets/productsitems/italian marble/Statuario Marble.jpg";

// ✅ Your WhatsApp Number
const PHONE_NUMBER = "918113001110";

const exoticMarbles = [
  {
    name: "Nero Marquina Marble",
    image: neroMarquinaImg,
    description: "Deep black marble with striking white veins."
  },
  {
    name: "Emperador Marble",
    image: emperadorImg,
    description: "Warm brown tones with soft, flowing patterns."
  },
  {
    name: "Fantasy Brown Marble",
    image: fantasyBrownImg,
    description: "Elegant swirling waves of brown, cream, and grey."
  },
  {
    name: "Carrara Marble",
    image: carraraImg,
    description: "Classic white marble with refined grey veining."
  },
  {
    name: "Calacatta Marble",
    image: calacattaImg,
    description: "Luxurious white stone with bold, dramatic veins."
  },
  {
    name: "Statuario Marble",
    image: statuarioImg,
    description: "Premium white marble with crisp, striking veining."
  }
];

function ExoticMarbles() {
  return (
    <section className="py-5 stone-page exotic-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Exotic Marbles</h2>
        <p className="text-white-50 mb-4">
          Bold, dramatic marbles that make a strong design statement.
        </p>
        
        <ProductSchema items={exoticMarbles} />

        <div className="row gy-4">
          {exoticMarbles.map((item) => {
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

export default ExoticMarbles;
