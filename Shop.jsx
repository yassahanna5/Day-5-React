 import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, Navigate } from "react-router-dom";
import axios from "axios";

export default function Shop() {
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      let { data } = await axios.get("https://dummyjson.com/products/categories");
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div style={{ display: "flex" }}>
       <aside
        style={{
          width: "250px",
          background: "RoyalBlue",
          color: "white",
          padding: "20px",
           height: "100%", 
        }}
      >
        <h2>Categories</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
           <li style={{ marginBottom: "10px" }}>
            <Link
              to={`/shop/all`}
              style={{ color: "white", textDecoration: "none" }}
            >
              All Products
            </Link>
          </li>

           {categories.map((cat) => (
            <li key={cat.slug || cat} style={{ marginBottom: "10px" }}>
              <Link
                to={`/shop/${cat.slug || cat}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                {cat.name || cat}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

       <main style={{ flex: 1, padding: "20px" }}>
         {!category && <Navigate to="/shop/all" replace />}
        <Outlet />
      </main>
    </div>
  );
}
