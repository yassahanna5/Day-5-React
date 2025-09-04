/* import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.cartItems);

  // عدد المنتجات المختلفة
  const cartCount = cart.length;

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "RoyalBlue",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <h2>MyShop</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}*/













































import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cart) || []; // ضمان أن cart مش undefined

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "blue",
        color: "white",
      }}
    >
      <div>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/shop" style={{ color: "white", marginRight: "20px" }}>
          Shop
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

