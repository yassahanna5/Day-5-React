/* import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, clearCart } from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <div style={{ flex: 2 }}>{item.title}</div>
              <div style={{ flex: 1 }}>${item.price}</div>
              <div style={{ flex: 1 }}>
                <button
                  onClick={() => dispatch(decreaseQty(item.id))}
                  disabled={item.qty === 1}
                >
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button
            onClick={() => dispatch(clearCart())}
            style={{
              padding: "10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}*/





















 


















































/*import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.title}</strong> (${item.price}) ×{" "}
                  {item.quantity}
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              background: "darkred",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}*/






























































import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "./RTK/Slices/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  padding: "10px 0",
                }}
              >
                <div>
                  <strong>{item.title}</strong> (${item.price})
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    disabled={item.quantity === 1}
                    style={{
                      background: "#ccc",
                      border: "none",
                      padding: "5px 10px",
                      cursor: item.quantity === 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    style={{
                      background: "green",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    style={{
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${totalPrice.toFixed(2)}</h3>

          <button
            onClick={() => dispatch(clearCart())}
            style={{
              background: "darkred",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}



