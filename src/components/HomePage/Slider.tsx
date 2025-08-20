"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/chainaiscreen.svg", url: "https://www.chainai.live/" },
  { src: "/cryptoroundupscreen.svg", url: "https://www.cryptoroundup.xyz/" },
  { src: "/decoswapscreen.svg", url: "https://decoswap.finance/" },
  { src: "/hatchspace2.svg", url: "https://www.hatchspace.xyz/" },
  { src: "/koolscreen.svg", url: "https://www.koolstartup.com/" },
  { src: "/rlscreen.svg", url: "https://a-itestbed-ui.vercel.app/" },
  { src: "/tokenizeafricascreen.svg", url: "https://www.tokenizeafrica.live/" },
  { src: "/vectorscreen2.svg", url: "https://vectordbui.vercel.app/" },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 p-2 bg-white/80 rounded-full shadow hover:bg-white z-10"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image with link */}
      <a
        href={slides[current].url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center"
      >
        <Image
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          width={600}
          height={400}
          className="rounded-lg shadow cursor-pointer"
        />
      </a>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 p-2 bg-white/80 rounded-full shadow hover:bg-white z-10"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

