import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import { ThreePage } from "./pages/ThreePage";

export default function App(){
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/threepage" element={<ThreePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};