import React, { useEffect, useState } from "react";
import { CareerTimelineItem, ScoutingReportData } from "@/types/types";
import { ExternalLink, FileText } from "lucide-react";
import { ScoutingReportModal } from "./ClipboardJourney.tsx/ScoutingReportModal";

interface ClipboardJourneyProps {
  careerTimeline: CareerTimelineItem[];
}

interface HandleEscEvent extends KeyboardEvent {
  key: string;
}

const ClipboardJourney: React.FC<ClipboardJourneyProps> = ({
  careerTimeline,
}) => {
  const [activeJobIndex, setActiveJobIndex] = useState<number>(0);
  const activeJob = careerTimeline[activeJobIndex];
  const scoutingReportData = activeJob.data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEsc = (event: HandleEscEvent): void => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section id="journey" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1F2937] p-4 sm:p-8 rounded-xl max-w-4xl mx-auto border border-gray-700 shadow-2xl">
            {/* Clipboard Clip */}
            <div className="w-32 h-8 bg-gray-600 rounded-t-lg mx-auto -mt-4 sm:-mt-8 border-t border-l border-r border-gray-500">
              <div className="w-6 h-1 bg-gray-800 rounded-full mx-auto mt-3"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Tabs - Vertical on mobile, Horizontal on desktop */}
              <div className="flex md:flex-col md:w-1/4 overflow-x-auto md:overflow-x-visible -mx-4 px-4 md:mx-0 md:px-0">
                <div className="flex md:flex-col gap-2 flex-shrink-0">
                  {careerTimeline.map((job, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveJobIndex(index)}
                      className={`flex items-center gap-3 w-full text-left p-3 cursor-pointer rounded-lg transition-colors text-sm ${
                        activeJobIndex === index
                          ? "bg-orange-500/10 text-orange-400"
                          : "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                      }`}
                    >
                      <span className="flex-shrink-0">{job.icon}</span>
                      <span className="flex-grow">{job.role}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-3/4 bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-heading text-white tracking-wide">
                      {activeJob.role}
                    </h3>
                    <p className="text-orange-500 font-semibold">
                      {activeJob.company}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {activeJob.date}
                  </span>
                </div>

                <div className="my-6">
                  <h4 className="font-semibold text-gray-300 mb-2">
                    Key Plays:
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {activeJob.description}
                  </p>
                </div>

                <div className="bg-orange-500/5 p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-400 mb-2 font-sans">
                    Scout's Note:
                  </h4>
                  <p className="text-orange-200/80 italic font-handwritten text-lg">
                    "{activeJob.notes}"
                  </p>
                </div>

                {activeJobIndex === 0 && (
                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Full Scouting Report</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScoutingReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={scoutingReportData ?? {} as ScoutingReportData}
      />
    </>
  );
};

export { ClipboardJourney };
