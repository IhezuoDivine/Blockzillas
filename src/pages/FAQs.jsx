import React, { useState } from "react";
import "../styles/FAQs.css";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What are BlockZillas NFTs?",
      answer: "BlockZillas NFTs are unique digital collectibles on the blockchain. Each NFT represents a one-of-a-kind BlockZilla with special traits and rarity."
    },
    {
      question: "How do I buy a BlockZilla NFT?",
      answer: "You can buy BlockZillas NFTs through our Explore or Mint pages. Connect your wallet, choose your NFT, and complete the transaction."
    },
    {
      question: "What wallets are supported?",
      answer: "Currently, we support MetaMask and other Ethereum-compatible wallets."
    },
    {
      question: "Can I sell my BlockZilla NFT?",
      answer: "Yes! You can sell your NFTs on supported marketplaces like OpenSea or directly in our platform if enabled."
    },
    {
      question: "How many BlockZillas are there?",
      answer: "The total supply and distribution details are available on our Roadmap and official contract."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? "active" : ""}`} 
            key={index} 
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
