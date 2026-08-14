import React from 'react';

export default function ProductSchema({ items }) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": item.name,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "1999.00",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2029-12-31"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "120"
        }
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
