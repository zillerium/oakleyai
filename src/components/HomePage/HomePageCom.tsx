"use client";

import Image from "next/image";
import Slider from "@/components/HomePage/Slider";
import ProjectCard from "@/components/HomePage/ProjectCard";
import AboutusCom from "@/components/HomePage/AboutusCom";

export default function HomePageCom() {
  const projects = [
    {
      title: "AI and Blockchains",
      imageName: "/chainaiscreen.svg",
      siteLink: "https://www.chainai.live/",
      techList: ["RL", "NextJs", "GCP", "AWS", "Vercel", "Tailwind"],
      desc: "Reinforcement Learning to solve problems with capital efficiency and slippage in DEXs.",
    },
    {
      title: "Crypto News (RAG)",
      imageName: "/cryptoroundupscreen.svg",
      siteLink: "https://www.cryptoroundup.xyz/",
      techList: ["Cloud Run", "GCP", "NextJS", "Vercel", "RAG", "OpenAI", "Vector DB", "Tailwind"],
      desc: "News crypto site using a Vector DB.",
    },
    {
      title: "Decentralized Exchange for RWAs",
      imageName: "/decoswapscreen.svg",
      siteLink: "https://decoswap.finance/",
      techList: [
        "NextJs",
        "Vercel",
        "WalletConnect",
        "Wagmi",
        "Hardhat",
        "DEXs",
        "AMMs",
        "Solidity",
        "Base Blockchain",
        "NFTs",
        "ERC20s",
        "OpenZeppelin",
        "Tailwind",
      ],
      desc: "DEX and AMM for RWAs and swaps.",
    },
    {
      title: "Startup Hub",
      imageName: "/hatchspace2.svg",
      siteLink: "https://www.hatchspace.xyz/",
      techList: ["Vercel", "NextJs", "Tailwind"],
      desc: "Startup hub space.",
    },
    {
      title: "Ideas Hub (Prompt Engineering)",
      imageName: "/koolscreen.svg",
      siteLink: "https://www.koolstartup.com/",
      techList: ["Vercel", "NextJS", "Prompt Engineering", "OpenAI", "GCP", "Firebase", "Tailwind"],
      desc: "Prompt engineering to flesh out startup ideas.",
    },
    {
      title: "AI Demos",
      imageName: "/rlscreen.svg",
      siteLink: "https://a-itestbed-ui.vercel.app/",
      techList: ["Vercel", "NextJs", "GCP", "Python", "Tailwind"],
      desc: "RL testbed for research.",
    },
    {
      title: "RWA Tokenization (Africa)",
      imageName: "/tokenizeafricascreen.svg",
      siteLink: "https://www.tokenizeafrica.live/",
      techList: ["Vercel", "NextJS", "Tailwind"],
      desc: "Tokenization of RWAs in Africa.",
    },
    {
      title: "RAG Demo (Vector DBs)",
      imageName: "/vectorscreen2.svg",
      siteLink: "https://vectordbui.vercel.app/",
      techList: ["Vercel", "NextJS", "AWS", "Tailwind", "App Runner", "OpenAI", "Python"],
      desc: "Vector DB Demo.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Top Banner */}
      <header className="w-full flex items-center justify-between p-4 bg-white shadow relative">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Oakley AI Logo"
            width={120}
            height={120}
            priority
          />
        </div>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-gray-900">
          Oakley AI
        </h1>
      </header>

      {/* Slider */}
      <Slider />
      <AboutusCom  />

      {/* Projects */}
      <main className="flex-1 flex flex-col items-center justify-start space-y-12 p-6">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </main>
    </div>
  );
}

