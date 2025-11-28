import React from "react";
import "../styles/StoneCard.css";

// Images
import carraraImg from "../assets/productsitems/italian marble/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/italian marble/Calacatta Marble.jpg";
import statuarioImg from "../assets/productsitems/italian marble/Statuario Marble.jpg";
import botticinoImg from "../assets/productsitems/italian marble/Botticino Marble.jpg";
import neroPortoroImg from "../assets/productsitems/italian marble/Nero Portoro Marble.jpg";

// WhatsApp Number
const PHONE_NUMBER = "918113001110";

// Italian marble data with descriptions
const italianMarbles = [
  {
    name: "Carrara Marble",
    image: carraraImg,
    description: "A soft white marble with fine grey veins—classic and timeless.",
  },
  {
    name: "Calacatta Marble",
    image: calacattaImg,
    description: "Premium white marble with bold, dramatic gold-grey veining.",
  },
  {
    name: "Statuario Marble",
    image: statuarioImg,
    description: "Luxurious white stone featuring crisp, defined grey veins.",
  },
  {
    name: "Botticino Marble",
    image: botticinoImg,
    description: "Warm beige marble with subtle patterns for elegant interiors.",
  },
  {
    name: "Nero Portoro Marble",
    image: neroPortoroImg,
    description: "Rich black marble with striking golden veins—pure luxury.",
  },
];

function ItalianMarble() {
  return (
    <section className="py-5 stone-page italian-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Italian Marble</h2>
        <p className="text-white-50 mb-4">
          Classic Italian marbles known for their elegance and luxury.
        </p>

        <div className="row gy-4">
          {italianMarbles.map((item) => {
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

export default ItalianMarble;
