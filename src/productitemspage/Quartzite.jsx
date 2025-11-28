import React from "react";
import "../styles/StoneCard.css";

import tajMahalImg from "../assets/productsitems/Quartzite/Taj Mahal Quartzite.jpg";
import whiteMacaubasImg from "../assets/productsitems/Quartzite/White Macaubas Quartzite.jpg";
import patagoniaImg from "../assets/productsitems/Quartzite/Patagonia Quartzite.jpg";
import coloredQuartzitesImg from "../assets/productsitems/Quartzite/Various Colored Quartzites.jpg";
import tradeNameQuartzitesImg from "../assets/productsitems/Quartzite/tradeNameQuartzites.jpg";

const PHONE_NUMBER = "918113001110"; // Your WhatsApp number

const quartzites = [
  {
    name: "Taj Mahal Quartzite",
    image: tajMahalImg,
    description: "Soft creamy tones with subtle veining—ideal for luxury kitchens.",
  },
  {
    name: "White Macaubas Quartzite",
    image: whiteMacaubasImg,
    description: "Elegant linear grey streaks on a crisp white base.",
  },
  {
    name: "Patagonia Quartzite",
    image: patagoniaImg,
    description: "Rare exotic quartzite with dramatic patchwork patterns.",
  },
  {
    name: "Various Colored Quartzites",
    image: coloredQuartzitesImg,
    description: "Available in striking natural colors from blues to greens.",
  },
  {
    name: "Other Named / Trade-Name Quartzites",
    image: tradeNameQuartzitesImg,
    description: "Special quartzites offered under premium designer labels.",
  },
];

function Quartzite() {
  return (
    <section className="py-5 stone-page quartzite-page">
      <div className="container">
        <h2 className="stone-title text-white mb-3">Quartzite</h2>
        <p className="text-white-50 mb-4">
          High-performance natural stones with exotic looks and excellent strength.
        </p>

        <div className="row gy-4">
          {quartzites.map((item) => {
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

export default Quartzite;
