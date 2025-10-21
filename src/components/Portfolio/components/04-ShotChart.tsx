import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/config/config";
import React, { useState, useEffect } from "react";

interface HandleEscEvent extends KeyboardEvent {
  key: string;
}

const ShotChart: React.FC = () => {
  const [hoveredShot, setHoveredShot] = useState<typeof projects[number] | null>(null);

  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event: HandleEscEvent): void => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  type ShotType = "3-Pointer" | "Mid-Range" | "In the Paint";
  
  const shotStyles: Record<ShotType, string> = {
    "3-Pointer": "fill-orange-400",
    "Mid-Range": "fill-orange-500",
    "In the Paint": "fill-orange-600",
  };

  return (
    <>
      <section id="highlights" className="py-20 px-6 bg-[#1F2937]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400 mb-12">
            Click any shot on the court to see the detailed scouting report
            about the project.
          </p>
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <svg viewBox="0 0 940 500" className="w-full h-full font-sans">
              {/* Court Background */}
              <rect width="940" height="500" fill="transparent" />

              {/* 3-Point Line */}
              <path
                d="M 770 32.5 A 237.5 237.5 0 0 1 180 32.5"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5 5"
                opacity="0.4"
              />
              <line
                x1="142.5"
                y1="32.5"
                x2="142.5"
                y2="460"
                stroke="#F97316"
                strokeWidth="2"
                opacity="0.4"
              />
              <line
                x1="797.5"
                y1="32.5"
                x2="797.5"
                y2="460"
                stroke="#F97316"
                strokeWidth="2"
                opacity="0.4"
              />
              <line
                x1="142.5"
                y1="32.5"
                x2="797.5"
                y2="32.5"
                stroke="#F97316"
                strokeWidth="2"
                opacity="0.4"
              />
              <line
                x1="142.5"
                y1="460"
                x2="797.5"
                y2="460"
                stroke="#F97316"
                strokeWidth="2"
                opacity="0.4"
              />

              {/* Key */}
              <rect
                x="380"
                y="32.5"
                width="180"
                height="190"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
              />
              <circle
                cx="470"
                cy="222.5"
                r="60"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                opacity="0.2"
              />

              {/* Hoop */}
              <circle
                cx="470"
                cy="87.5"
                r="15"
                stroke="#F97316"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
              <line
                x1="425"
                y1="52.5"
                x2="515"
                y2="52.5"
                stroke="#F97316"
                strokeWidth="2"
                opacity="0.4"
              />
              {projects.map((project, index) => {
                const xPosPercent = parseFloat(project.shotPosition.x);
                let textAnchor: "inherit" | "middle" | "start" | "end" | undefined = "middle";
                let textX = project.shotPosition.x;

                if (xPosPercent < 15) {
                  textAnchor = "start";
                } else if (xPosPercent > 85) {
                  textAnchor = "end";
                }

                // Ensure project.type is typed as ShotType
                const shotType = project.type as ShotType;

                return (
                  <g
                    key={index}
                    className="cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                    onMouseEnter={() => setHoveredShot(project)}
                    onMouseLeave={() => setHoveredShot(null)}
                  >
                    <circle
                      cx={project.shotPosition.x}
                      cy={project.shotPosition.y}
                      r="12"
                      className={`${
                        shotStyles[shotType]
                      } opacity-90 group-hover:opacity-100 transition-opacity`}
                      stroke="#111827"
                      strokeWidth="2"
                    />
                    <circle
                      cx={project.shotPosition.x}
                      cy={project.shotPosition.y}
                      r="16"
                      className="fill-transparent group-hover:fill-orange-500/20 transition-all"
                    />
                    <text
                      x={textX}
                      y={project.shotPosition.y}
                      dy="-22"
                      textAnchor={textAnchor}
                      className="font-bold pointer-events-none fill-gray-200 group-hover:fill-white transition-colors"
                      style={{ fontSize: "16px" }}
                    >
                      {project.title}
                    </text>
                  </g>
                );
              })}
            </svg>

            {hoveredShot && (
              <div
                className="absolute bg-gray-950 text-white text-sm rounded-lg px-4 py-3 border border-orange-500/50 shadow-2xl pointer-events-none transition-all duration-200 opacity-100 w-64 z-10"
                style={{
                  left: hoveredShot.shotPosition.x,
                  top: hoveredShot.shotPosition.y,
                  transform: `translate(-50%, -100%) translateY(-45px)`,
                }}
              >
                <p className="text-gray-300 leading-relaxed">
                  {hoveredShot.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export { ShotChart };
