 import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      let { data } = await axios.get("https://dummyjson.com/products?limit=30");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  // التحريك التلقائي كل 3 ثواني
  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === products.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [products]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Slider Products</h1>

      {/* السلايدر */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          scrollBehavior: "smooth",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 210}px)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                minWidth: "200px",
                marginRight: "10px",
              }}
            >
              <img
                src={p.images[0]}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <p>{p.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* باقي المنتجات */}
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
