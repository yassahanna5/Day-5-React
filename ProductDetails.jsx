  import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./RTK/Slices/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  // تحريك تلقائي للسلايدر كل 3 ثواني
  useEffect(() => {
    if (product && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [product]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {/* صور المنتج كسلايدر بسيط */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {product.images.map((img, idx) => (
              <div key={idx} style={{ minWidth: "100%" }}>
                <img
                  src={img}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "370px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* تفاصيل المنتج */}
        <div style={{ flex: 2 }}>
          <p>{product.description}</p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {product.rating}
          </p>

          <button
            onClick={() => dispatch(addToCart(product))}
            style={{
              padding: "10px 15px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* الريفيوهات / التعليقات */}
      {product.reviews && product.reviews.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>Customer Reviews</h3>
          {product.reviews.map((review, idx) => (
            <div
              key={idx}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "10px",
                paddingBottom: "10px",
              }}
            >
              <p>
                <strong>{review.reviewerName}</strong>
              </p>
              <p>⭐ {review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
