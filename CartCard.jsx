 import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./RTK/Slices/cartSlice";

export default function CartCard({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <img src={item.thumbnail || item.images?.[0]} alt={item.title} width="50" />
      <p>{item.title}</p>
      <p>${item.price}</p>
      <button onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}
