 import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let { data } = await axios.get("https://dummyjson.com/products?limit=30");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Slider Products</h1>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          scrollBehavior: "smooth",
        }}
      >
        {products.map((p) => (
          <div key={p.id} style={{ minWidth: "200px" }}>
            <img
              src={p.images[0]}
              alt={p.title}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <p>{p.title}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>All Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <ProductCards key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
