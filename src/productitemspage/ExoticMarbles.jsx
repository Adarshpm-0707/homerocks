import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import neroMarquinaImg from "../assets/productsitems/Exotic Marbles/Nero Marquina Marble.jpg";
import emperadorImg from "../assets/productsitems/Exotic Marbles/Emperador Marble.jpg";
import fantasyBrownImg from "../assets/productsitems/Exotic Marbles/Fantasy Brown Marble.jpg";
import carraraImg from "../assets/productsitems/italian marble/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/italian marble/Calacatta Marble.jpg";
import statuarioImg from "../assets/productsitems/italian marble/Statuario Marble.jpg";

const PHONE_NUMBER = "918113001110";

const exoticMarbles = [
  {
    name: "Nero Marquina Marble",
    image: neroMarquinaImg,
    description: "Deep black marble with striking white veins from Spain.",
  },
  {
    name: "Emperador Marble",
    image: emperadorImg,
    description: "Warm brown tones with rich natural spider-web veining.",
  },
  {
    name: "Fantasy Brown Marble",
    image: fantasyBrownImg,
    description: "Swirling flowing waves of brown, apricot, cream, and grey.",
  },
  {
    name: "Carrara Exotic Selection",
    image: carraraImg,
    description: "High-grade Italian white marble with refined character.",
  },
  {
    name: "Calacatta Exotic Gold",
    image: calacattaImg,
    description: "Extraordinary white marble with bold dramatic veins.",
  },
  {
    name: "Statuario Extra Selection",
    image: statuarioImg,
    description: "The crown jewel of Italian white marbles with crisp patterns.",
  },
];

function ExoticMarbles() {
  return (
    <section className="py-5 stone-page exotic-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Exotic Marbles</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Exotic Marble Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Bold, dramatic marbles hand-selected from exotic quarries worldwide to create striking focal points, luxury feature walls, and bespoke living rooms.
        </p>

        <ProductSchema items={exoticMarbles} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Exotic Marble Varieties</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Book Site Visit
          </Link>
        </div>

        <div className="row gy-4">
          {exoticMarbles.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Exotic Marbles collection. Please share pricing and slab availability.`;
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
                        alt={`${item.name} slab in Kannur`}
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

export default ExoticMarbles;
