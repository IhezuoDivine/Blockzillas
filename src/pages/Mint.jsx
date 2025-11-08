import React, { useState } from "react";
import "../styles/mint.css";

export default function Mint() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const pricePerNFT = 0.05; // ETH

  const connectWallet = () => {
    // placeholder function, integrate with MetaMask later
    setWalletConnected(true);
  };

  const mintNFT = () => {
    if (!walletConnected) return alert("Please connect your wallet first!");
    alert(`Minting ${quantity} BlockZilla NFT(s) for ${quantity * pricePerNFT} ETH...`);
    // call blockchain function here
  };

  return (
    <div className="mint-container">
      <h1 className="mint-header">Mint Your BlockZilla NFT</h1>
      <p className="mint-desc">
        Connect your wallet and mint the rarest BlockZillas. Each NFT is unique!
      </p>

      {!walletConnected ? (
        <button className="mint-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div className="mint-controls">
          <div className="quantity-selector">
            <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <p className="total-price">
            Total: { (quantity * pricePerNFT).toFixed(2) } ETH
          </p>
          <button className="mint-btn" onClick={mintNFT}>
            Mint Now
          </button>
        </div>
      )}
    </div>
  );
}
