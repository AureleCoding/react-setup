import React from "react";
import { NavLink  } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <NavLink  to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Home</NavLink >
      <NavLink  to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>About</NavLink >
    </nav>
  );
}
