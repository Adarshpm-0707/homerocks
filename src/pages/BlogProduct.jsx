import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogProduct.css";

// ─── Blog-post data ──────────────────────────────────────────────────────────
export const BLOG_DATA = {
  "stone-flooring-guide-kannur-thalipparamba": {
    tag: "Buying Guide",
    title: "Best Flooring Stone for Your Home in Kannur & Thalipparamba",
    author: "Homerocks",
    date: "April 2025",
    location: "Kannur & Thalipparamba",
    readTime: "8 min read",
    lede: "Everything you need to know about choosing marble or granite for your Kerala home — with advice specific to Kannur's climate, architecture, and lifestyle.",
    stats: [
      { num: "3,000mm", label: "Annual Rainfall" },
      { num: "Room-by-Room", label: "Full Guide" },
      { num: "Premium", label: "Stone Types" },
    ],
    toc: [
      { id: "climate", label: "Climate" },
      { id: "marble", label: "Marble" },
      { id: "granite", label: "Granite" },
      { id: "comparison", label: "Comparison" },
      { id: "rooms", label: "Room Guide" },
      { id: "stones", label: "Popular Stones" },
      { id: "care", label: "Care Tips" },
    ],
    sections: [
      {
        id: "climate",
        heading: "Understanding Kannur's climate before choosing stone",
        body: "Kannur and Thalipparamba receive some of the highest rainfall in Kerala — regularly exceeding 3,000 mm annually. The combination of high humidity, warm temperatures, and monsoon conditions year-round creates specific challenges for flooring materials:",
        list: [
          "Porous stones absorb moisture more readily in humid conditions, requiring proper sealing",
          "Outdoor and veranda surfaces face intense rain and need materials with natural slip resistance",
          "Interior flooring can develop a slight sheen of surface moisture during peak monsoon months",
          "Frequent wet-cleaning is standard in Kerala homes, meaning the stone must handle regular mopping",
        ],
        body2: "Both marble and granite can work beautifully in Kannur homes — the key is matching the stone to the right room and finishing it correctly. That's where expert guidance makes all the difference.",
        tip: {
          label: "Important for Kannur homes",
          text: "Always specify a polished or honed finish for indoor marble, and a flamed or bush-hammered finish for any granite used outdoors.",
        },
      },
      {
        id: "marble",
        heading: "Marble: the prestige choice for Kannur interiors",
        body: "Marble is a metamorphic rock valued for its translucent depth and elegant veining. No synthetic material replicates the way marble catches and reflects light — and no two slabs are ever identical. This natural uniqueness is one of the primary reasons Kannur homeowners choose imported marble for their most visible spaces.",
        subsections: [
          {
            h3: "Why marble works well in Kannur",
            p: "In the context of a Kannur home, marble is best understood as an interior luxury material. Living rooms, master bedrooms, and pooja rooms are where marble truly shines. The natural coolness of marble underfoot is also a significant advantage in Kannur's warm climate — marble floors feel noticeably cooler than ceramic tiles or engineered materials.",
          },
          {
            h3: "Honest limitations of marble",
            p: "Marble is softer and more porous than granite. It can stain from cooking oils, acidic liquids, and tamarind — which are common in Kerala kitchens. Unsealed marble also absorbs moisture over time. These are not reasons to avoid marble — they are reasons to use it in the right places and seal it properly.",
          },
        ],
      },
      {
        id: "granite",
        heading: "Granite: the durable standard for high-use areas",
        body: "Granite is an igneous rock — formed from cooled magma — and it is extraordinarily dense and hard. It resists scratching, staining, heat, and moisture far better than marble. For Kannur's kitchens, bathrooms, staircases, and outdoor zones, granite is simply the most practical natural stone available.",
        subsections: [
          {
            h3: "Why Thalipparamba builders prefer granite for key zones",
            p: "Contractors and architects working on projects in Thalipparamba and the surrounding areas consistently specify granite for areas that receive heavy foot traffic, exposure to water, or cooking-related wear. Granite's almost zero maintenance requirement — once properly sealed at installation — makes it the contractor's choice for reliability.",
          },
          {
            h3: "Aesthetic variety in imported granite",
            p: "The common perception that granite is limited to basic black or red slabs is outdated. Imported granite now comes in dramatic blues, deep forest greens, warm golds, and cloudy whites — with veining and movement patterns that rival marble.",
          },
        ],
      },
      {
        id: "comparison",
        heading: "Marble vs Granite: direct comparison for Kannur homes",
        table: {
          headers: ["Factor", "Marble", "Granite"],
          rows: [
            ["Hardness", "Moderate (Mohs 3–4)", "Very high (Mohs 6–7)"],
            ["Humidity resistance", "Needs regular sealing", "Naturally dense, low absorption"],
            ["Stain resistance", "Moderate — avoid acids", "High — ideal for kitchens"],
            ["Heat resistance", "Good", "Excellent"],
            ["Scratch resistance", "Can scratch over time", "Very high"],
            ["Underfoot feel", "Cool and pleasant", "Neutral"],
            ["Outdoor suitability", "Not recommended", "Excellent"],
            ["Maintenance", "Seal every 12–18 months", "Minimal after installation"],
            ["Best rooms", "Hall, bedroom, pooja", "Kitchen, outdoor, stairs"],
          ],
        },
      },
      {
        id: "rooms",
        heading: "Room-by-room guide for Kannur & Thalipparamba homes",
        roomGrid: [
          { icon: "🏠", title: "Living room", badge: "Marble", badgeClass: "marble", text: "The hall is where imported marble creates the most impact. Italian whites like Statuario or Calacatta make a home feel expansive." },
          { icon: "🍳", title: "Kitchen", badge: "Granite", badgeClass: "granite", text: "Granite is the go-to for Kannur kitchens. It handles heat, cutting, and tamarind without issue." },
          { icon: "🛏", title: "Bedroom", badge: "Marble", badgeClass: "marble", text: "Marble is ideal for bedrooms — it creates a serene atmosphere and the cooler surface is welcome in Kannur." },
          { icon: "🪔", title: "Pooja room", badge: "White Marble", badgeClass: "marble", text: "White marble is the traditional choice. Thassos White or Turkish White are popular for their pristine tone." },
          { icon: "🌧", title: "Outdoor", badge: "Granite only", badgeClass: "granite", text: "In monsoon-heavy Kannur, only granite should be used outdoors. Specify flamed finish for grip." },
          { icon: "🪜", title: "Staircase", badge: "Both", badgeClass: "both", text: "Granite is safer and more durable for stairs, but marble works well for purely indoor staircases." },
        ],
      },
      {
        id: "stones",
        heading: "Popular imported stones for Kannur homes",
        specGrid: [
          { name: "Statuario White", origin: "Italy · Marble", text: "Bold grey veining on pure white. The definitive prestige marble for living rooms." },
          { name: "Calacatta Gold", origin: "Italy · Marble", text: "White with warm, gold-toned veins. Highly requested for master bedrooms." },
          { name: "Cosmic Black", origin: "India · Granite", text: "Deep black with gold and silver flecks. A popular choice for kitchen platforms." },
          { name: "Steel Grey", origin: "India · Granite", text: "Fine-grained grey with silver shimmer. Elegant and versatile for all areas." },
        ],
      },
      {
        id: "care",
        heading: "Stone care in Kannur's climate: essential tips",
        steps: [
          "Seal at installation: Both marble and granite should be sealed with high-quality penetrating sealer.",
          "Re-seal marble annually: Marble should be re-sealed every 12 to 18 months in humid climates.",
          "Use pH-neutral cleaners: Avoid acidic or bleach-based cleaners on marble to prevent etching.",
          "Wipe spills quickly: Especially on marble, wipe up tamarind or lemon juice immediately.",
        ],
      },
    ],
    cta: {
      text: "Ready to choose your stone?",
      sub: "Visit Homerocks — North Malabar's largest imported stone showroom — and see every variety in full slab form.",
      btnText: "Browse Collection",
      mapsUrl: "https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc",
    },
  },

  "natural-stone-kerala": {
    tag: "Flooring & Stone",
    title: "Why we  recommend natural stone for Kerala homes",
    author: "Homerocks",
    location: "Taliparamba, Kannur",
    readTime: "6 min read",
    lede: "We've been selling stone in North Kerala for over 25 years. And in that time, the one thing we keep telling every homeowner is this: the floor is the one decision in your home you can't easily undo. Get it right the first time.",
    stats: [
      { num: "25+", label: "Stone varieties we carry" },
      { num: "30 yrs", label: "Expected lifespan" },
      { num: "Kerala", label: "Climate-proven" },
    ],
    sections: [
      {
        eyebrow: "The case for stone",
        heading: "Kerala's climate is tough. Natural stone is tougher.",
        body: "Kerala climate puts heavy stress on floors—humidity, salt air, and heat. Synthetic alternatives warp, fade and crack. Natural stone does none of that.",
        tip: {
          label: "Our honest take",
          text: "Natural stone has zero thermal expansion and lasts longer in high-humidity climates than any engineered alternative.",
        },
      },
      {
        eyebrow: "Our collection",
        heading: "Four stones, four personalities",
        stones: [
          { name: "Granite", desc: "Scratch-proof and stain-resistant.", badge: "Halls, kitchens, stairs", link: "/granite" },
          { name: "Marble",  desc: "Luxury look with natural veining.",   badge: "Bedrooms",             link: "/italian-marbles" },
          { name: "Kota Stone", desc: "Budget-friendly and slip-resistant.", badge: "Outdoor areas",    link: "/quartzite" },
          { name: "Slate & Laterite", desc: "Traditional Kerala style stone.", badge: "Heritage homes", link: "/travertine" },
        ],
      },
      {
        eyebrow: "Maintenance",
        heading: "The truth about caring for stone",
        care: [
          { freq: "Daily",   title: "Sweep gently",      text: "Prevent scratches by removing dust and grit daily with a soft broom." },
          { freq: "Weekly",  title: "Use neutral cleaner", text: "Avoid acids like vinegar or lemon. Use a pH-neutral stone cleaner." },
          { freq: "Yearly",  title: "Re-seal if needed",  text: "Marble and limestone benefit from an annual sealant application." },
        ],
      },
    ],
    cta: {
      text: "Ready to choose your stone?",
      sub: "Visit Homerocks Taliparamba. No pressure.",
      btnText: "Visit Showroom ↗",
      mapsUrl: "https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc",
    },
  },

  "italian-marble-guide": {
    tag: "Buying Guide",
    title: "How to Identify Genuine Italian Marble — And Why It Matters",
    author: "Homerocks",
    location: "Taliparamba, Kannur",
    readTime: "6 min read",
    lede: "As demand for Italian marble rises across Kerala and India, so does the circulation of chemically treated or misrepresented stones in the market. Many buyers unknowingly invest in materials that look impressive at first glance but fail to deliver long-term value.",
    sections: [
      {
        heading: "What Makes Italian Marble Special?",
        body: "Authentic Italian marble — primarily quarried in Carrara, Calacatta, and Statuario regions — is prized for its natural formation, subtle veining, and exceptional strength. Its geological purity and millennia of pressure beneath the earth create a product that is simply irreplicable.",
      },
      {
        heading: "Signs of Chemically Treated Stone",
        body: "Chemically treated stones are often marketed under Italian-sounding names or enhanced to resemble genuine marble.",
        list: [
          { label: "Overly uniform veining", text: "— real marble veins vary in width, depth, and direction." },
          { label: "Artificially bright surface", text: "— a plastic-like shine that feels synthetic." },
          { label: "No variation slab to slab", text: "— natural marble always differs between slabs." },
        ],
      },
      {
        tip: {
          label: "HOMEROCKS Tip",
          text: "Always ask to see the marble in natural daylight, not just showroom lighting.",
        },
      },
    ],
    cta: {
      text: "Ready to see authentic imported marble in person?",
      sub: "Our Kannur showroom is open 7 days a week.",
      btnText: "Book Visit",
      mapsUrl: "https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc",
    },
  },

  "marble-granite-showroom-kannur-thalipparamba": {
    tag: "Local Guide",
    title: "Best Imported Marble & Granite Showroom Near Kannur & Thalipparamba",
    author: "Homerocks",
    date: "April 2025",
    location: "Kannur & Thalipparamba",
    readTime: "6 min read",
    lede: "Building or renovating in Kannur district? Homerocks — North Malabar's largest imported stone showroom — makes world-class marble and granite accessible for homes across Kannur, Thalipparamba, Thalassery, Payyanur, and beyond.",
    sections: [
      {
        heading: "Why Kannur homeowners are choosing imported stone",
        body: "Kannur has seen remarkable growth in quality home construction over the past decade. With more homeowners investing in well-designed interiors, the demand for premium natural stone has risen sharply. Families in Thalipparamba, Iritty, Payyanur, and Mattannur are increasingly choosing Italian marble and imported granite for their living rooms, pooja rooms, and kitchen countertops.",
        tip: {
          label: "Local insight",
          text: "Several landmark homes and commercial buildings across Kannur district — from Thalassery to Payyanur — are fitted with stone sourced from Homerocks."
        }
      },
      {
        heading: "Areas in Kannur district we serve",
        areaGrid: [
          { name: "Kannur City", tag: "District HQ", text: "Homeowners from Kannur city and suburbs regularly visit our showroom for living room marble and kitchen granite." },
          { name: "Thalipparamba", tag: "Residential Hub", text: "Rapid residential development. We supply marble and granite to many new villa and apartment projects here." },
          { name: "Thalassery", tag: "Heritage Town", text: "A blend of heritage renovations and new constructions — we serve both with appropriate stone choices." },
          { name: "Payyanur & Iritty", tag: "Northern Kannur", text: "Homeowners looking for imported stone beyond what's locally available find Homerocks to be the destination." }
        ]
      },
      {
        heading: "What makes Homerocks different for Kannur buyers",
        featureList: [
          { icon: "🏛", title: "Hundreds of imported slabs", text: "Most shops carry limited local stock. We give you access to hundreds of imported varieties from Italy, Brazil, and Turkey." },
          { icon: "👁", title: "See the actual slab", text: "Our showroom lets you view full slabs under natural lighting before committing to your purchase." },
          { icon: "🚚", title: "Delivery to your site", text: "We arrange stone delivery to your project site anywhere in Kannur district — from Thalipparamba to Payyanur." }
        ],
        quote: {
          text: "When we were finishing our house in Thalipparamba, we visited three or four stone shops. Nothing came close to what Homerocks had — the variety and the guidance made our decision easy.",
          cite: "Homeowner, Thalipparamba"
        }
      },
      {
        heading: "Frequently asked questions",
        faq: [
          { q: "Where can I find imported marble near Kannur?", a: "Homerocks is North Malabar's largest imported stone showroom, easily accessible from Kannur. We stock varieties not available at local shops." },
          { q: "Does Homerocks supply to Thalipparamba?", a: "Yes, absolutely. We regularly supply imported marble and granite to projects in Thalipparamba with direct site delivery." },
          { q: "Is marble a good choice for Kannur's climate?", a: "Yes, marble works beautifully in living rooms and bedrooms. With proper sealing, it lasts for generations in Kerala homes." }
        ]
      }
    ],
    cta: {
      text: "Visit Homerocks for your Kannur project",
      sub: "North Malabar's largest imported marble & granite showroom — serving all of Kannur district.",
      btnText: "Explore Collection",
      mapsUrl: "https://maps.app.goo.gl/UU6RtaQQWGrQB1d6A?g_st=ipc"
    }
  },
};

export default function BlogProduct() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    const data = BLOG_DATA[slug];
    if (data) {
      setPost(data);
      document.body.classList.add("blog-page");
    } else {
      setNotFound(true);
    }
    setLoading(false);
    window.scrollTo(0, 0);
    return () => document.body.classList.remove("blog-page");
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("bp-visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll(".bp-reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post]);

  if (loading) return <div className="bp-wrap" style={{ background: '#F8F5F1', minHeight: '100vh', padding: '100px' }}>Loading...</div>;
  if (notFound) return <div className="bp-wrap" style={{ background: '#F8F5F1', minHeight: '100vh', padding: '100px' }}>Post not found.</div>;

  const { tag="", title="", author="Homerocks", date="", location="Kannur", readTime="", lede="", stats=[], toc=[], sections=[], cta={} } = post || {};

  return (
    <div className="bp-wrap">
      {/* ── UNIFIED HERO ── */}
      <header className="bp-hero-section">
        <div className="bp-hero-inner">
          <Link to="/blog" className="bp-back bp-reveal">← Back to Journal</Link>
          <div className="bp-tag bp-reveal">{tag} · {readTime}</div>
          <h1 className="bp-reveal bp-delay-1">{title}</h1>
          <div className="bp-byline bp-reveal bp-delay-2">Published {date} · By {author} · {location}</div>
        </div>
      </header>

      {/* ── OPTIONAL TOC ── */}
      {toc.length > 0 && (
        <nav className="bp-toc">
          {toc.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
        </nav>
      )}

      {/* ── UNIFIED CONTENT AREA ── */}
      <article className="bp-content-area">
        <p className="bp-lede bp-reveal">{lede}</p>

        {/* Unified Stats Row */}
        {stats.length > 0 && (
          <div className="bp-stats-row bp-reveal">
            {stats.map((s, idx) => (
              <div className="bp-stat" key={idx}>
                <span className="bp-stat-num">{s.num}</span>
                <span className="bp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Unified Section Mapping */}
        {sections.map((sec, i) => (
          <section key={i} id={sec.id} className="bp-reveal bp-delay-1">
            {sec.eyebrow && <h4 className="bp-eyebrow">{sec.eyebrow}</h4>}
            {sec.heading && <h2 className="bp-h2">{sec.heading}</h2>}
            {sec.body && <p className="bp-p">{sec.body}</p>}
            
            {/* Conditional Subsections */}
            {sec.subsections && sec.subsections.map((sub, sidx) => (
              <div key={sidx} className="bp-sub">
                <h3 className="bp-h3">{sub.h3}</h3>
                <p className="bp-p">{sub.p}</p>
              </div>
            ))}

            {/* Conditional Lists */}
            {sec.list && (
              <ul className="bp-list">
                {sec.list.map((li, lidx) => (
                  <li key={lidx}>
                    {typeof li === 'object' ? <span><strong>{li.label}</strong> {li.text}</span> : li}
                  </li>
                ))}
              </ul>
            )}

            {/* Conditional Table */}
            {sec.table && (
              <div className="bp-table-wrap">
                <table className="bp-table">
                  <thead><tr>{sec.table.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>
                    {sec.table.rows.map((row, ridx) => (
                      <tr key={ridx}>{row.map((cell, cidx) => <td key={cidx}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Conditional Room Grid */}
            {sec.roomGrid && (
              <div className="bp-room-grid">
                {sec.roomGrid.map((room, ridx) => (
                  <div className="bp-room-card" key={ridx}>
                    <div className="bp-room-hdr"><span>{room.icon}</span><span className="bp-room-title">{room.title}</span></div>
                    <div className="bp-room-body">
                      <span className={`bp-badge bp-badge-${room.badgeClass}`}>{room.badge}</span>
                      <p className="bp-small-p">{room.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional Spec Grid */}
            {sec.specGrid && (
              <div className="bp-spec-grid">
                {sec.specGrid.map((spec, sidx) => (
                  <div className="bp-spec-card" key={sidx}>
                    <div className="bp-spec-name">{spec.name}</div>
                    <div className="bp-spec-origin">{spec.origin}</div>
                    <p className="bp-small-p">{spec.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional Stone Collection Links */}
            {sec.stones && (
              <div className="bp-stone-grid">
                {sec.stones.map((stone, si) => (
                  <Link key={stone.name} to={stone.link} className="bp-stone-card">
                    <div className="bp-stone-name">{stone.name}</div>
                    <div className="bp-stone-desc">{stone.desc}</div>
                    <div className="bp-stone-badge">{stone.badge}</div>
                    <div className="bp-stone-arrow">View collection →</div>
                  </Link>
                ))}
              </div>
            )}

            {/* Conditional Care/Frequency List */}
            {sec.care && (
              <div className="bp-care-list">
                {sec.care.map((c, ci) => (
                  <div key={ci} className="bp-care-row">
                    <div className="bp-care-freq">{c.freq}</div>
                    <div className="bp-care-content">
                      <div className="bp-care-title">{c.title}</div>
                      <p className="bp-small-p">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional Steps */}
            {sec.steps && (
              <ul className="bp-steps">
                {sec.steps.map((step, sidx) => (
                  <li key={sidx} className="bp-step-li"><div className="bp-step-dot"></div><p className="bp-step-p">{step}</p></li>
                ))}
              </ul>
            )}

            {/* Conditional Area Grid */}
            {sec.areaGrid && (
              <div className="bp-area-grid">
                {sec.areaGrid.map((area, aidx) => (
                  <div className="bp-area-card" key={aidx}>
                    <div className="bp-area-tag">{area.tag}</div>
                    <div className="bp-area-name">{area.name}</div>
                    <p className="bp-small-p">{area.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional Feature List */}
            {sec.featureList && (
              <div className="bp-feature-list">
                {sec.featureList.map((f, fidx) => (
                  <div className="bp-feature-item" key={fidx}>
                    <div className="bp-f-icon">{f.icon}</div>
                    <div className="bp-f-content">
                      <strong>{f.title}</strong>
                      <span>{f.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Conditional Quote */}
            {sec.quote && (
              <div className="bp-quote">
                <p>{sec.quote.text}</p>
                <cite>— {sec.quote.cite}</cite>
              </div>
            )}

            {/* Conditional FAQ */}
            {sec.faq && (
              <div className="bp-faq">
                {sec.faq.map((item, fidx) => (
                  <details className="bp-faq-item" key={fidx}>
                    <summary className="bp-faq-q">{item.q}</summary>
                    <div className="bp-faq-a">{item.a}</div>
                  </details>
                ))}
              </div>
            )}

            {sec.body2 && <p className="bp-p">{sec.body2}</p>}
            {sec.tip && <div className="bp-aside"><strong>{sec.tip.label}</strong>{sec.tip.text}</div>}
          </section>
        ))}

        {/* ── UNIFIED CTA ── */}
        <div className="bp-cta bp-reveal">
          <h2 className="bp-cta-title">{cta.text}</h2>
          <p className="bp-cta-sub">{cta.sub}</p>
          <button className="bp-cta-btn" onClick={() => window.open(cta.mapsUrl, "_blank")}>
            {cta.btnText || "Visit Showroom"}
          </button>
        </div>
      </article>
    </div>
  );
}
