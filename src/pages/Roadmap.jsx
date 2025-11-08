import React from "react";
import "../styles/Roadmap.css";

export default function Roadmap() {
  const roadmapItems = [
    {
      title: "Phase 1: Concept & Launch",
      description:
        "Develop the BlockZillas concept, website, and initial NFT collection mint.",
    },
    {
      title: "Phase 2: Community Growth",
      description:
        "Build our Discord and Twitter communities, launch giveaways, and incentivize early adopters.",
    },
    {
      title: "Phase 3: Marketplace Listing",
      description:
        "List BlockZillas NFTs on major NFT marketplaces and enable secondary sales.",
    },
    {
      title: "Phase 4: Metaverse Integration",
      description:
        "Introduce BlockZillas in virtual worlds and gaming ecosystems.",
    },
    {
      title: "Phase 5: Future Expansions",
      description:
        "Launch new NFT series, staking rewards, and roadmap-based events for holders.",
    },
  ];

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-header">BlockZillas NFT Roadmap</h1>
      <div className="roadmap">
        {roadmapItems.map((item, index) => (
          <div className="roadmap-item" key={index}>
            <div className="roadmap-circle">{index + 1}</div>
            <div className="roadmap-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
