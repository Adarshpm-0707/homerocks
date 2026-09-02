import React from "react";
import { Link } from "react-router-dom";
import "../styles/StoneCard.css";
import ProductSchema from "../components/ProductSchema";

// Images
import carraraImg from "../assets/productsitems/italian marble/Carrara Marble.jpg";
import calacattaImg from "../assets/productsitems/italian marble/Calacatta Marble.jpg";
import statuarioImg from "../assets/productsitems/italian marble/Statuario Marble.jpg";
import botticinoImg from "../assets/productsitems/italian marble/Botticino Marble.jpg";
import neroPortoroImg from "../assets/productsitems/italian marble/Nero Portoro Marble.jpg";
import goldenSpiderImg from "../assets/productsitems/italian marble/Golden spider marble.jpg";
import michaelAngeloImg from "../assets/productsitems/italian marble/Michael angelo marble.jpg";

// WhatsApp Number
const PHONE_NUMBER = "918113001110";

const italianMarbles = [
  {
    name: "Carrara Marble",
    image: carraraImg,
    description: "Classic white marble with subtle, feathery grey veining. Ideal for master suites and living spaces.",
  },
  {
    name: "Calacatta Gold Marble",
    image: calacattaImg,
    description: "Bold dramatic gold and grey veining on crisp white background. Pure luxury.",
  },
  {
    name: "Statuario Marble",
    image: statuarioImg,
    description: "Prestigious Italian stone with crisp, distinct grey veining and mirror-polish surface.",
  },
  {
    name: "Botticino Marble",
    image: botticinoImg,
    description: "Warm beige Italian marble with subtle natural character for expansive flooring.",
  },
  {
    name: "Nero Portoro Marble",
    image: neroPortoroImg,
    description: "Deep black background with striking golden-yellow veins for statement walls.",
  },
  {
    name: "Golden Spider Marble",
    image: goldenSpiderImg,
    description: "Intricate golden and orange web-like veining on a light base.",
  },
  {
    name: "Michelangelo Marble",
    image: michaelAngeloImg,
    description: "Artistic Italian marble slab with fluid, dramatic natural patterns.",
  },
];

function ItalianMarble() {
  return (
    <section className="py-5 stone-page italian-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-3">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><Link to="/" className="text-white-50">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products" className="text-white-50">Collections</Link></li>
            <li className="breadcrumb-item active text-warning" aria-current="page">Italian Marble</li>
          </ol>
        </nav>

        <h1 className="stone-title text-white mb-2 fs-1">Italian Marble Collection in Kannur</h1>
        <p className="text-white-50 mb-4 max-w-700">
          Handpicked Italian marbles imported directly from prestigious quarries. Known worldwide for their timeless elegance, natural luminosity, and luxurious appeal for high-end Kerala homes.
        </p>

        <ProductSchema items={italianMarbles} />

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-4 text-white mb-0">Available Italian Slabs &amp; Finishes</h2>
          <Link to="/get-measurement" className="btn btn-sm btn-outline-warning">
            Book Site Measurement
          </Link>
        </div>

        <div className="row gy-4">
          {italianMarbles.map((item) => {
            const whatsappText = `Hello, I am interested in ${item.name} from your Italian Marble collection. Please share pricing and slab availability.`;
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

        <div className="text-center mt-5 p-4 rounded-4" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 className="fs-5 text-white mb-2">Need Help Choosing the Right Italian Marble?</h3>
          <p className="text-white-50 small mb-3">Visit our Kuppam, Taliparamba warehouse to view full book-matched slabs in person.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary btn-sm">Contact Showroom</Link>
            <Link to="/granite" className="btn btn-outline-light btn-sm">View Granite Collection</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItalianMarble;
