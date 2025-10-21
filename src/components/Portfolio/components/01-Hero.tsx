import React, { useEffect, useState } from "react";
import { fullName, jobTitle } from "@/config/config";
import { ChevronDown } from "lucide-react";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // setIsMenuOpen(false);
    }
  };

  // Typing effect for the hero section subtitle
  useEffect(() => {
    let index = 0;
    const fullText = fullName + " - " + jobTitle;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="tip_off"
      className="relative w-full h-screen bg-gray-900 flex flex-col justify-between items-center overflow-hidden font-sans"
    >
      {/* Basketball court pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="court"
              patternUnits="userSpaceOnUse"
              width="150"
              height="150"
              patternTransform="scale(2) rotate(45)"
            >
              <path
                d="M 75 0 L 75 150 M 0 75 L 150 75"
                stroke="#F97316"
                strokeWidth="1"
              />
              <circle
                cx="75"
                cy="75"
                r="20"
                stroke="#F97316"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#court)" />
        </svg>
      </div>

      {/* Center Content with Large M */}
      <div className="flex-1 flex justify-center items-center relative z-10">
        <div className="text-center relative">
          {/* Large stylized letter M with glow effect */}
          <div className="relative">
            <div className="text-[18rem] md:text-[24rem] font-bold text-gray-800 select-none leading-none">
              {fullName
                .split(" ")
                .map((n, i) => (i === 0 ? n[0] : n[0]))
                .join("")}
            </div>
            {/* Subtle glow behind the M */}
            <div className="absolute inset-0 text-[18rem] md:text-[24rem] font-bold text-orange-500/10 blur-xl select-none leading-none">
              {fullName
                .split(" ")
                .map((n, i) => (i === 0 ? n[0] : n[0]))
                .join("")}
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                {typedText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="w-full flex justify-between items-end p-6 absolute bottom-0 z-10">
        {/* Left Text */}
        <div className="text-left">
          <p className="text-xl md:text-2xl leading-tight text-gray-300">
            I'm a{" "}
            <span className="font-bold uppercase text-orange-500">
              FULL-STACK
            </span>
          </p>
          <p className="text-xl md:text-2xl leading-tight text-gray-300">
            <span className="font-bold uppercase text-gray-50">DEVELOPER</span>{" "}
            building
          </p>
          <p className="text-xl md:text-2xl leading-tight text-gray-300">
            scalable{" "}
            <span className="font-bold uppercase text-orange-500">SYSTEMS</span>
          </p>
        </div>

        {/* Center Navigation Buttons */}
        <div className="flex flex-col gap-3 absolute left-1/2 -translate-x-1/2 bottom-24">
          <button
            onClick={() => scrollToSection("journey")}
            className="bg-orange-500 cursor-pointer text-gray-900 rounded-full w-14 h-14 flex justify-center items-center hover:bg-orange-600 transition-all duration-300 font-bold text-sm transform hover:scale-110 shadow-lg"
          >
            <ChevronDown />
          </button>
        </div>

        {/* Right Text */}
        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
            Matrix Defence Ltd. · Since Dec 2022
          </p>
          <p className="text-sm text-orange-500 font-semibold">
            Full-Stack Team Leader
          </p>
        </div>
      </div>

      {/* Subtle animated elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950/50 to-transparent pointer-events-none"></div>

      {/* Corner accents */}
      <div className="absolute top-20 left-10 w-1 h-20 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-1 h-20 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-20 left-10 w-1 h-20 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
      <div className="absolute bottom-20 right-10 w-1 h-20 bg-gradient-to-t from-orange-500/50 to-transparent"></div>
    </section>
  );
};

export { Hero };
