"use client";

import Image from "next/image";

export default function AboutusCom() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">

      {/* Heading Section */}
      <div className="px-6 py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Who am I
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn more about our vision and mission
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row flex-1 px-6 pb-10 gap-6">
        {/* Left Side */}
        <div className="flex-1 border border-gray-300 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
          <p className="text-gray-600">
	  I am Trevor Lee Oakley and this is my showcase webpage. I currently work in the AI and blockchain sectors mainly as a contractor/consultant. I also have my own projects. My main work is focused on Retrieval-Augmented Generation, RAG, with vector DBs and using OpenAI&apos;s APIs. On the AI side my main focus is on reinforcement learning, especially applied to DeFi, DEXs, and AMMs. I am also a part-time PhD student in DeFi.

	  </p>
        </div>

{/* Right Side */}
<div className="flex-1 border border-gray-300 bg-white rounded-lg p-6 shadow-sm flex items-center justify-center">
  <Image
    src="/aboutus2.svg"
    alt="About Us"
    width={515}   // base intrinsic size
    height={342}
    className="w-full h-auto object-contain"
  />
</div>


      </div>
    </div>
  );
}

