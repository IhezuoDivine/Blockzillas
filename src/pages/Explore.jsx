import React from "react";
import NftCard from "../components/NftCard";
import "../styles/Explore.css";

export default function Explore() {
  const items = [
    { id: 1, name: "Stamping #002", series: "Genesis", price: "0.05" },
    { id: 2, name: "Roaring #010", series: "Echo", price: "0.03" },
    { id: 3, name: "Flex Eye #077", series: "Vision", price: "0.12" },
  ];
  return (
    <main className="page explore-page">
      <h1>Explore NFTs</h1>
      <div className="nft-grid">
        {items.map((item) => (
          <NftCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
