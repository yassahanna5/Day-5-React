 import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          background: "#f5f5f5",
          marginTop: "30px",
        }}
      >
        All rights reserved 2025 © by Eng.yassa hanna
      </footer>
    </div>
  );
}
