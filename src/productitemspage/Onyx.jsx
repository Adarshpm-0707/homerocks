import React from "react";
import "../styles/StoneCard.css";

import whiteOnyxImg from "../assets/productsitems/Onyx/White Onyx.jpg";
import honeyOnyxImg from "../assets/productsitems/Onyx/Honey Onyx.jpg";
import blueOnyxImg from "../assets/productsitems/Onyx/Blue Onyx.jpg";
import greenOnyxImg from "../assets/productsitems/Onyx/Green Onyx.jpg";
import blackOnyxImg from "../assets/productsitems/Onyx/Black Onyx.jpg";
import pinkOnyxImg from "../assets/productsitems/Onyx/Pink Onyx.jpg";

// WhatsApp Number
const PHONE_NUMBER = "918113001110";

// Each stone with description
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
  }
  ,
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
        <h2 className="stone-title text-white mb-3">Onyx</h2>
        <p className="text-white-50 mb-4">
          Translucent stones perfect for backlit walls and luxury highlights.
        </p>

        <div className="row gy-4">
          {onyxStones.map((item) => {
            // WhatsApp Message
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

export default Onyx;
