import React from "react";
import "../styles/Products.css";

// Import your videos
import italianMarbleVideo from "../assets/videos/italian video.mp4";
import exoticMarbleVideo from "../assets/videos/Exotic video.mp4";
import onyxVideo from "../assets/videos/onyx video.mp4";
import travertineVideo from "../assets/videos/Travertine video.mp4";
import Quartzitemarble from "../assets/videos/Quartzite marble.mp4";
import Premiumindianmarbles from "../assets/videos/Premium Indian Marbles.mp4";
import Quartz from "../assets/videos/Quartz marble.mp4";
import Granite from "../assets/videos/Granite.mp4";


// Define categories with videos
const categories = [
  {
    name: "Italian Marbles",
    video: italianMarbleVideo,
  },
  {
    name: "Exotic Marbles",
    video: exoticMarbleVideo,
  },
  {
    name: "Onyx",
    video: onyxVideo,
  },
  {
    name: "Travertine",
    video: travertineVideo,
  },
  {
    name: "Quartzite",
    video: Quartzitemarble,
  },
  {
    name: "Premium Indian Marbles",
    video: Premiumindianmarbles,
  },
  {
    name: "Quartz",
    video: Quartz,
  },
  {
    name: "Granite",
    video: Granite,
  },

];

function Products() {
  return (
    <section className="py-5">
      <div className="container text-center">
       
       <div className="text-center mb-4">
      <h2 className="section-title text-white mb-2">Stone Collections</h2>
      <p className=" text-white mb-0">
        Explore premium stones carefully curated for homes, villas, and
        commercial spaces.
      </p>
    </div>

        {/* Video Categories */}
        <div className="row gy-4 mb-4">
          {categories.map((cat) => (
            <div key={cat.name} className="col-6 col-md-4 col-lg-3">
              <div className="hr-category-card">
                <div className="hr-category-media">

                  {cat.video ? (
                    <>
                      <video
                        className="hr-category-video"
                        src={cat.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="hr-category-label">{cat.name}</div>
                    </>
                  ) : (
                    <div className="hr-category-fallback">{cat.name}</div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="small text-white  text-center mt-3">
          *More colors, sizes, and finishes available in our showroom and
          warehouse.
        </p>
      </div>
    </section>
  );
}

export default Products;
