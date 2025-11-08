import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-header">About BlockZillas</h1>
      <p className="about-desc">
        BlockZillas is a revolutionary NFT collection that brings together rare
        and unique digital collectibles on the blockchain. Our mission is to
        empower collectors, gamers, and NFT enthusiasts to own a piece of the
        roar!
      </p>

      <div className="about-section">
        <div className="about-item">
          <h2>Our Vision</h2>
          <p>
            To build a thriving community of NFT enthusiasts while creating
            unique and highly valuable digital collectibles.
          </p>
        </div>
        <div className="about-item">
          <h2>Our Mission</h2>
          <p>
            Deliver top-tier NFT art, expand into the metaverse, and offer
            exciting experiences for holders worldwide.
          </p>
        </div>
        <div className="about-item">
          <h2>Why BlockZillas?</h2>
          <p>
            Each BlockZilla is unique, carefully designed, and part of an
            evolving ecosystem. Owning one means being part of an exclusive
            global community.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2 className="team-header">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/assets/team1.jpg" alt="Team Member" />
            <h3>BlockZilla</h3>
            <p>Founder</p>
          </div>
          <div className="team-card">
            <img src="/assets/team1.jpg" alt="Team Member" />
            <h3>Code Engr</h3>
            <p>Project Lead</p>
          </div>
          <div className="team-card">
            <img src="/assets/team2.jpg" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>Art Director</p>
          </div>
          <div className="team-card">
            <img src="/assets/team3.jpg" alt="Team Member" />
            <h3>John Smith</h3>
            <p>Blockchain Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
