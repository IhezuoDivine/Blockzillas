import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Mint from "./pages/Mint";
import Collection from "./pages/Collection";
import Roadmap from "./pages/Roadmap";
import About from "./pages/About";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
