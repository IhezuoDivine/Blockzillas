import React from "react";
import { Link } from "react-router-dom";
import NftCard from "../components/NftCard";
import Header from "../components/Header";
import Nav from "../components/Nav";
import About from "../pages/About";
import FAQs from "../pages/FAQs";
import "../styles/Home.css";
import Roadmap from "./Roadmap";

export default function Home() {
  const featured = {
    name: "Moonwalker #001",
    series: "Genesis",
    price: "0.08",
  };
  return (
    <main className="first">
      <Header />
      <Nav />
      <section className="title slide-in-section">
        <div className="hero-content">
          <h4 className="heroh4">
            <span className="slide-type"> BlockZillas NFTs</span> Own a piece of
            the Roar
          </h4>
          <p>
            Limited edition generative NFTs inspired by BlockZillas formations.
          </p>
          <div className="hero-buttons">
            <Link to="/mint" className="btn-primary">
              Mint Now
            </Link>
            <Link to="/explore" className="btn-secondary">
              Explore
            </Link>
          </div>
        </div>
      </section>
      <Roadmap />
      <section className="buy-container">
        <h1 className="buy-header">How to Buy BlockZillas NFTs</h1>

        <div className="buy-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p className="step-text">
              Create a crypto wallet (MetaMask recommended) to store your NFTs.
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p className="step-text">
              Fund your wallet with Ethereum (ETH) or the required crypto.
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p className="step-text">
              Connect your wallet to the BlockZillas NFT marketplace.
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p className="step-text">
              Select your favorite BlockZillas NFT and click "Buy Now".
            </p>
          </div>
          <div className="step">
            <span className="step-number">5</span>
            <p className="step-text">
              Confirm the transaction in your wallet and wait for it to be
              mined.
            </p>
          </div>
        </div>

        <button className="buy-btn">Buy Your BlockZilla NFT</button>
      </section>
      <NftCard item={featured} />
      <FAQs />
      <About />
    </main>
  );
}
