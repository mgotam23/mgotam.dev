import { ScoutingReportData } from "@/types/types";
import {
  Award,
  ChevronRight,
  Rocket,
  Shield,
  Users,
  X,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const BasketballTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none"
    preserveAspectRatio="none"
  >
    <defs>
      <pattern
        id="court-lines"
        x="0"
        y="0"
        width="200"
        height="200"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="100"
          x2="200"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#court-lines)" />
  </svg>
);

const FilmIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
    <line x1="17" y1="17" x2="22" y2="17" />
  </svg>
);

// Refactored Modal Component that accepts data
interface ScoutingReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ScoutingReportData;
}

const ScoutingReportModal: React.FC<ScoutingReportModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: <Trophy className="w-4 h-4" /> },
    {
      id: "innovation",
      label: "Innovation",
      icon: <Rocket className="w-4 h-4" />,
    },
    {
      id: "leadership",
      label: "Leadership",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Current Role */}
            <div className="relative bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl p-6 border border-orange-500/30 overflow-hidden">
              <BasketballTexture />
              <div className="relative z-10">
                <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                  Current Role
                </div>
                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {data.currentRole.title}
                </h1>
                <p className="text-orange-200 text-lg font-semibold">
                  {data.currentRole.subtitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.currentRole.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-full text-xs text-orange-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Highlights */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="text-orange-500 w-5 h-5" />
                Career Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {data.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <span className="text-gray-300 text-sm">
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FilmIcon />
                Key Performance Stats
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {data.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-800 to-gray-800/50 rounded-lg p-4 border border-gray-700 text-center"
                  >
                    <div className="text-2xl font-bold text-orange-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "innovation":
        return (
          <div className="space-y-6">
            {data.innovations.map((innovation, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="p-5 border-b border-gray-700 bg-gradient-to-r from-orange-500/10 to-orange-600/10">
                  <div className="text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    🔹 {innovation.type}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {innovation.title}
                  </h4>
                </div>

                <div className="p-5 space-y-4">
                  {innovation.description && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-orange-400 font-bold text-xs mb-2">
                        🎥 THE OPPORTUNITY
                      </div>
                      <p className="text-gray-300 text-sm">
                        {innovation.description}
                      </p>
                    </div>
                  )}

                  {innovation.phases && (
                    <div>
                      <div className="text-white font-bold text-sm mb-3">
                        🏀 PLAY BREAKDOWN
                      </div>
                      <div className="space-y-3">
                        {innovation.phases.map((phase, phaseIdx) => (
                          <div
                            key={phaseIdx}
                            className="bg-gray-800/40 rounded-lg p-3 border border-gray-700"
                          >
                            <div className="font-bold text-orange-400 text-sm mb-2">
                              {phase.name}
                            </div>
                            <ul className="space-y-1.5">
                              {phase.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="text-gray-300 text-xs flex items-start gap-2"
                                >
                                  <span className="text-orange-500 mt-0.5">
                                    •
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {innovation.technologies && (
                    <div className="space-y-3">
                      <div className="text-white font-bold text-sm">
                        📚 TECHNOLOGIES INTRODUCED
                      </div>
                      {innovation.technologies.map((tech, techIdx) => (
                        <div
                          key={techIdx}
                          className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                        >
                          <h5 className="font-bold text-blue-400 mb-2 text-sm">
                            ▸ {tech.name}
                          </h5>
                          <div className="space-y-1.5 text-xs">
                            <div className="flex gap-2">
                              <span className="text-gray-500 font-semibold min-w-20">
                                Challenge:
                              </span>
                              <span className="text-gray-300">
                                {tech.challenge}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-500 font-semibold min-w-20">
                                Solution:
                              </span>
                              <span className="text-gray-300">
                                {tech.solution}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <span className="text-gray-500 font-semibold min-w-20">
                                Impact:
                              </span>
                              <span className="text-green-400 font-semibold">
                                {tech.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {innovation.approach && (
                        <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-500/40">
                          <div className="text-purple-400 font-bold text-xs mb-2">
                            💭 APPROACH
                          </div>
                          <p className="text-gray-300 italic text-xs">
                            {innovation.approach}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {innovation.metrics && (
                    <div>
                      <div className="text-white font-bold text-sm mb-3">
                        📊 IMPACT METRICS
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {innovation.metrics.map((metric, metricIdx) => (
                          <div
                            key={metricIdx}
                            className="bg-gray-800/60 rounded-lg p-3 border border-gray-700"
                          >
                            <div className="text-[10px] text-gray-500 mb-1 uppercase">
                              {metric.label}
                            </div>
                            <div className="text-sm font-bold text-orange-400">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {innovation.highlights && (
                    <div>
                      <div className="text-white font-bold text-sm mb-2">
                        🎯 INNOVATION HIGHLIGHTS
                      </div>
                      <div className="space-y-2">
                        {innovation.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 text-gray-300 bg-orange-900/20 rounded-lg p-2 border border-orange-500/20 text-xs"
                          >
                            <span className="text-orange-400 mt-0.5">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        );

      case "leadership":
        return (
          <div className="space-y-6">
            {data.leadership.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="p-5 border-b border-gray-700 bg-gradient-to-r from-green-500/10 to-green-600/10">
                  <div className="text-green-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    🎯 {item.type}
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                </div>

                <div className="p-5 space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-green-400 font-bold text-xs mb-2">
                      📋 THE SITUATION
                    </div>
                    <p className="text-gray-300 text-sm">{item.situation}</p>
                  </div>

                  {item.strategies && (
                    <div className="space-y-3">
                      {item.strategies.map((strategy, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                        >
                          <div className="font-bold text-green-400 mb-2 text-sm">
                            {strategy.type}
                          </div>
                          <ul className="space-y-1.5">
                            {strategy.tactics.map((tactic, tIdx) => (
                              <li
                                key={tIdx}
                                className="text-gray-300 text-xs flex items-start gap-2"
                              >
                                <span className="text-green-500 mt-0.5">•</span>
                                <span>{tactic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.style && (
                    <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/40">
                      <div className="text-green-400 font-bold text-xs mb-2">
                        🎯 LEADERSHIP STYLE
                      </div>
                      <p className="text-gray-300 italic text-xs">
                        "{item.style}"
                      </p>
                    </div>
                  )}

                  {item.metrics && (
                    <div>
                      <div className="text-white font-bold text-sm mb-3">
                        👥 TEAM IMPACT
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {item.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-gray-800/60 rounded-lg p-3 border border-gray-700 text-center"
                          >
                            <div className="text-xl font-bold text-green-400">
                              {metric.value}
                            </div>
                            <div className="text-[10px] text-gray-400 mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {data.leadership[0]?.qualities && (
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 rounded-xl border border-gray-700 p-5">
                <h4 className="text-lg font-bold text-white mb-4">
                  Core Leadership Qualities
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {data.leadership[0].qualities.map((quality, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-green-500/30 transition-colors"
                    >
                      <div className="text-green-400 font-semibold text-sm mb-1">
                        {quality.title}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {quality.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case "assessment":
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-xl border border-orange-500/40 p-5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="text-orange-500 w-5 h-5" />
                Scout's Final Assessment
              </h3>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm italic border-l-4 border-orange-500 pl-4 py-2">
                  "{data.assessment.summary}"
                </p>

                {/* Strengths */}
                <div>
                  <h4 className="text-orange-400 font-bold mb-3 text-sm uppercase">
                    STRENGTHS:
                  </h4>
                  <div className="space-y-2">
                    {data.assessment.strengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 bg-gray-900/40 rounded-lg p-2.5 hover:bg-gray-900/60 transition-colors"
                      >
                        <ChevronRight className="text-orange-400 mt-0.5 w-3 h-3" />
                        <div className="text-xs">
                          <span className="font-semibold text-white">
                            {strength.title}:
                          </span>{" "}
                          {strength.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Playing Style */}
                <div className="bg-gray-900/60 rounded-lg p-4 border border-orange-500/40">
                  <h4 className="text-orange-400 font-bold mb-2 text-xs uppercase">
                    PLAYING STYLE:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    <span className="font-bold text-white text-base">
                      {data.assessment.playingStyle.title}
                    </span>{" "}
                    - {data.assessment.playingStyle.description}
                  </p>
                </div>

                {/* Grades */}
                <div>
                  <h4 className="text-orange-400 font-bold mb-3 text-sm uppercase">
                    PERFORMANCE METRICS:
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {data.assessment.grades.map((grade, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/60 rounded-lg p-3 border border-gray-700"
                      >
                        <div className="text-orange-400 font-bold text-lg">
                          {grade.grade}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {grade.category}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projection */}
                <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-500/40">
                  <h4 className="text-purple-400 font-bold mb-2 text-xs uppercase">
                    PROJECTION:
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {data.assessment.projection}
                  </p>
                </div>

                {data.assessment.comparableTo && (
                  <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/40">
                    <h4 className="text-blue-400 font-bold mb-2 text-xs uppercase">
                      COMPARABLE TO:
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {data.assessment.comparableTo}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#1F2937] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5" />
            Scouting Report
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="bg-gray-900/80 border-b border-gray-700 px-4 py-2 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-8rem)] p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export { ScoutingReportModal };
