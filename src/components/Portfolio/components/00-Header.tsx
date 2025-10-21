import React, { useState, useEffect } from "react";
import { fullName } from "@/config/config";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  sections: string[];
}

interface SectionDisplayNames {
  [key: string]: string;
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("tip_off");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionDisplayNames: SectionDisplayNames = {
    tip_off: "Tip-Off",
    journey: "The Journey",
    highlights: "Highlights",
    blog: "The Playbook",
  };

  // Scrollspy to update active navigation link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjusted offset for better accuracy
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#111827]/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-xl font-bold font-heading tracking-wider cursor-pointer"
            onClick={() => scrollToSection("tip_off")}
          >
            {fullName}
            <span className="text-orange-500">.</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {sections && sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors font-semibold text-sm tracking-wide ${
                  activeSection === section
                    ? "text-orange-500"
                    : "text-[#F9FAFB] hover:text-orange-500 cursor-pointer"
                }`}
              >
                {sectionDisplayNames.hasOwnProperty(section)
                  ? sectionDisplayNames[section]
                  : section}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-[#F9FAFB]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left capitalize py-2 hover:text-orange-500 transition-colors"
              >
                {sectionDisplayNames[section]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export { Header };
