import React, { useState } from "react";
import NftCard from "../components/NftCard";
import "../styles/collection.css";

export default function BlockZillasCollection() {
  const [filter, setFilter] = useState("All");

  const items = [
    { id: 1, name: "Moonwalker #002", series: "Genesis", price: "0.05", rarity: "Rare" },
    { id: 2, name: "Lunar Echo #010", series: "Echo", price: "0.03", rarity: "Common" },
    { id: 3, name: "Crater Eye #077", series: "Vision", price: "0.12", rarity: "Epic" },
    { id: 4, name: "Solar Roar #001", series: "Genesis", price: "0.07", rarity: "Rare" },
    { id: 5, name: "Nebula Fang #045", series: "Echo", price: "0.04", rarity: "Common" },
    { id: 6, name: "Galactic Claw #099", series: "Vision", price: "0.15", rarity: "Legendary" },
  ];

  const filteredItems = filter === "All" ? items : items.filter(item => item.series === filter);

  return (
    <div className="collection-container">
      <h1 className="collection-header">BlockZillas NFT Collection</h1>
      <p className="collection-desc">Discover and own your BlockZilla NFT. Explore the rarest and most epic collectibles!</p>

      <div className="filter-buttons">
        {["All", "Genesis", "Echo", "Vision"].map((series) => (
          <button 
            key={series} 
            className={`filter-btn ${filter === series ? "active" : ""}`}
            onClick={() => setFilter(series)}
          >
            {series}
          </button>
        ))}
      </div>

      <div className="nft-grid">
        {filteredItems.map(item => (
          <NftCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

