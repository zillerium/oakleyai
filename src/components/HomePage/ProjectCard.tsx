"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  imageName: string; // path in /public
  techList: string[];
  desc: string;
  siteLink: string;
};

export default function ProjectCard({ title, imageName, techList, desc, siteLink }: ProjectCardProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow rounded-lg p-6 space-y-6">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-900">{title}</h2>

      {/* Image + Tech List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Image (clickable) */}
        <div className="flex flex-col items-center">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={imageName}
              alt={title}
              width={400}
              height={300}
              className="rounded-lg shadow cursor-pointer"
            />
          </a>
          {/* Link below image */}
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-600 underline break-words"
          >
            {siteLink}
          </a>
        </div>

        {/* Tech List (full gray box, equal height) */}
        <div className="flex flex-col justify-center bg-gray-100 rounded-lg p-4 text-gray-700 h-full">
          <h3 className="font-semibold mb-2 text-center">Tech Stack</h3>
          <p className="text-center">{techList.join(", ")}</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-50 rounded-lg p-4 text-gray-700">{desc}</div>
    </div>
  );
}

