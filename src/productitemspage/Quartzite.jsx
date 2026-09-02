import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

import tajMahalImg from "../assets/productsitems/Quartzite/Taj Mahal Quartzite.jpg";
import whiteMacaubasImg from "../assets/productsitems/Quartzite/White Macaubas Quartzite.jpg";
import patagoniaImg from "../assets/productsitems/Quartzite/Patagonia Quartzite.jpg";
import coloredQuartzitesImg from "../assets/productsitems/Quartzite/Various Colored Quartzites.jpg";
import tradeNameQuartzitesImg from "../assets/productsitems/Quartzite/tradeNameQuartzites.jpg";

const PHONE_NUMBER = "918113001110";

const quartzites = [
  {
    name: "Taj Mahal Quartzite",
    image: tajMahalImg,
    description: "Soft creamy tones with subtle marble-like veining and granite-grade durability.",
  },
  {
    name: "White Macaubas Quartzite",
    image: whiteMacaubasImg,
    description: "Linear flowing grey streaks on crisp white base. Excellent for kitchen islands.",
  },
  {
    name: "Patagonia Quartzite",
    image: patagoniaImg,
    description: "Rare exotic quartzite with dramatic translucent quartz patches and earthy veins.",
  },
  {
    name: "Various Colored Quartzites",
    image: coloredQuartzitesImg,
    description: "Available in striking natural colors from emerald greens to ocean blues.",
  },
  {
    name: "Designer Trade-Name Quartzites",
    image: tradeNameQuartzitesImg,
    description: "Special natural quartzite slabs handpicked for bespoke architectural projects.",
  },
];

function Quartzite() {
  return (
    <section className="py-5 stone-page quartzite-page">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Quartzite</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Natural Quartzite Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          High-performance natural quartzite stones that combine the breathtaking veining of marble with the extreme durability and scratch resistance of granite.
        </p>

        <ProductSchema items={quartzites} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Quartzite Slabs &amp; Varieties</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Get Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {quartzites.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Quartzite collection. Please share pricing and slab availability.`;
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

export default Quartzite;
