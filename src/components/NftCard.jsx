import React from "react";
import { Link } from "react-router-dom";


export default function NftCard({ item }) {
  return (
    <div className="nft-card">
      <div className="nft-image">{item.name}</div>
      <div className="nft-info">
        <h4>{item.name}</h4>
        <p>{item.series}</p>
        <div className="nft-bottom">
          <span>{item.price} ETH</span>
          <Link to="/collection" className="view-btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
