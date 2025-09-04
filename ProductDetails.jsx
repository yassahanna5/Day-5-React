 import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./RTK/Slices/cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <img
            src={product.images[0]}
            alt={product.title}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </div>
        <div style={{ flex: 2 }}>
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Rating: {product.rating}</p>
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
    </div>
  );
}
