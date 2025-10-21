import { Award, ChevronDown, Code, Layers, Rocket, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";
import { useState } from "react";

const BasketballTexture = () => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.02] pointer-events-none" preserveAspectRatio="none">
        <defs>
            <pattern id="court-lines" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#court-lines)"/>
    </svg>
);

const FilmIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="7" x2="7" y2="7"/>
        <line x1="2" y1="17" x2="7" y2="17"/>
        <line x1="17" y1="7" x2="22" y2="7"/>
        <line x1="17" y1="17" x2="22" y2="17"/>
    </svg>
);

const ScoutingReport: React.FC = () => {
    const [expandedFilm, setExpandedFilm] = useState<string | null>(null);

    const toggleFilm = (filmId: string) => {
        setExpandedFilm(expandedFilm === filmId ? null : filmId);
    };

    const filmRooms = [
        {
            id: 'innovation',
            title: 'Innovation & Technology Adoption',
            icon: <Rocket className="w-6 h-6" />,
            plays: [
                {
                    title: 'Real-Time Translation Platform',
                    type: 'SIGNATURE PLAY',
                    setup: {
                        title: 'THE OPPORTUNITY',
                        content: 'Internal teams struggling with language barriers in global work. Existing tools: slow, clunky, broke workflow. Accessibility gap.'
                    },
                    quarters: [
                        {
                            name: 'Scouting Phase: Technology Research',
                            time: '',
                            plays: [
                                'Evaluated LLM options (GPT-4, Claude, open-source models)',
                                'Tested streaming APIs for real-time translation',
                                'Benchmarked latency vs accuracy tradeoffs',
                                'Selected optimal model for internal use case'
                            ]
                        },
                        {
                            name: 'Execution Phase: Platform Build',
                            time: '',
                            plays: [
                                'Architected streaming interface for live translation',
                                'Built React frontend with real-time text updates',
                                'Implemented Python backend with LLM integration',
                                'Optimized for <500ms response times',
                                'Added context preservation across conversations'
                            ]
                        }
                    ],
                    stats: [
                        { label: 'Translation speed', value: '3-5 sec → <0.5 sec (90% faster)' },
                        { label: 'User adoption', value: '0 → 200+ internal users in 2 months' },
                        { label: 'Meeting efficiency', value: '30% time saved in multilingual calls' },
                        { label: 'Accessibility score', value: 'Improved company-wide communication' }
                    ],
                    innovationHighlights: [
                        'First to introduce LLM streaming in company infrastructure',
                        'Proactive solution to unspoken accessibility problem',
                        'Built in parallel to primary projects (nights/weekends)'
                    ]
                },
                {
                    title: 'Technology Adoption Playbook',
                    type: 'KEY SEQUENCE',
                    technologies: [
                        {
                            name: 'Next.js Migration',
                            challenge: 'React app performance bottlenecks',
                            solution: 'SSR/SSG with Next.js for faster load times',
                            impact: '60% faster initial page load'
                        },
                        {
                            name: 'Apache Airflow Integration',
                            challenge: 'Manual workflow orchestration, error-prone',
                            solution: 'Automated DAGs for complex data pipelines',
                            impact: '95% reduction in manual intervention'
                        },
                        {
                            name: 'ELK Stack Implementation',
                            challenge: 'Limited system observability, hard to debug',
                            solution: 'Centralized logging with Elasticsearch/Kibana',
                            impact: 'Debug time reduced from hours to minutes'
                        }
                    ],
                    approach: "Doesn't chase shiny objects. Identifies real problems, then researches proven solutions. Prototypes fast, measures impact, then scales. Smart risk-taker."
                }
            ]
        },
        {
            id: 'leadership',
            title: 'Team Leadership & Project Management',
            icon: <Users className="w-6 h-6" />,
            plays: [
                {
                    title: 'Concurrent Project Juggling Act',
                    type: 'SIGNATURE PLAY',
                    setup: {
                        title: 'THE SITUATION',
                        content: 'Managing 2-4 full-stack projects simultaneously across cross-functional teams. Backend Python services, React frontends, Next.js apps - all moving at different speeds.'
                    },
                    strategies: [
                        {
                            type: 'Offensive Strategy: Delivery Management',
                            tactics: [
                                'Organized sprint planning across multiple workstreams',
                                'Coordinated backend/frontend handoffs seamlessly',
                                'Unblocked teams by jumping into critical path work',
                                'Maintained code quality across all projects'
                            ]
                        },
                        {
                            type: 'Defensive Strategy: Risk Mitigation',
                            tactics: [
                                'Identified integration risks early through architecture review',
                                'Prevented scope creep with clear technical boundaries',
                                'Established rollback procedures for safe deployments'
                            ]
                        }
                    ],
                    leadershipStyle: 'Leads from the front. Writes code alongside the team while maintaining strategic oversight. Removes blockers fast. Clear communicator who translates between technical and business.'
                }
            ]
        }
    ];

    const highlights = [
        { icon: <Layers className="w-5 h-5" />, text: 'Architected more than 5 platforms from zero to production' },
        { icon: <Rocket className="w-5 h-5" />, text: 'Introduced new technologies that became company standards' },
        { icon: <Users className="w-5 h-5" />, text: 'Led cross-functional teams across 2-4 concurrent projects' },
        { icon: <Zap className="w-5 h-5" />, text: 'Built real-time LLM translation tool (company first)' },
        { icon: <Target className="w-5 h-5" />, text: 'Created modular GIS C2 system used by 3 projects in the last year' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Improved observability with ELK (hours → minutes debug time)' },
    ];

    return (
        <div className="bg-[#1F2937] min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto space-y-10">
                
                {/* Header */}
                <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
                    <BasketballTexture />
                    <div className="relative z-10">
                        <div className="text-orange-100 text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            Current Role
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                            Full-Stack Team Leader
                        </h1>
                        <p className="text-orange-50 text-xl md:text-2xl font-semibold">
                            Python & React
                        </p>
                    </div>
                </div>
                
                {/* Career Highlights */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm rounded-xl border border-gray-700 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Award className="text-orange-500 w-7 h-7" />
                        Highlight Reel
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-4 bg-gradient-to-br from-gray-800/70 to-gray-800/40 rounded-lg p-5 border border-gray-700 hover:border-orange-500/50 hover:translate-x-1 transition-all duration-300 group">
                                <div className="text-orange-500 mt-0.5 group-hover:scale-110 transition-transform">{highlight.icon}</div>
                                <span className="text-gray-300 leading-relaxed">{highlight.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Film Rooms */}
                {filmRooms.map((room) => (
                    <div key={room.id} className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden relative group hover:border-orange-600/40 hover:shadow-2xl transition-all duration-300">
                        <BasketballTexture />
                        
                        <button
                            onClick={() => toggleFilm(room.id)}
                            className="w-full p-6 md:p-8 flex items-center justify-between cursor-pointer hover:bg-gray-800/40 transition-all duration-300 relative z-10"
                        >
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-orange-500/20 rounded-xl border border-orange-500/40 text-orange-500 group-hover:scale-110 group-hover:bg-orange-500/30 transition-all duration-300">
                                    {room.icon}
                                </div>
                                <div className="text-left">
                                    <div className="flex items-center gap-3 mb-2">
                                        <FilmIcon />
                                        <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">Film Room</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">{room.title}</h3>
                                </div>
                            </div>
                            <div className={`transition-transform duration-300 ${expandedFilm === room.id ? 'rotate-180' : ''}`}>
                                <ChevronDown className="w-7 h-7 text-orange-400" />
                            </div>
                        </button>

                        {expandedFilm === room.id && (
                            <div className="p-6 md:p-8 pt-0 space-y-10 relative z-10">
                                {room.plays.map((play: any, idx: number) => (
                                    <div key={idx} className="space-y-8">
                                        {/* Play Header */}
                                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                                            <div className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                                🔹 {play.type}
                                            </div>
                                            <h4 className="text-2xl md:text-3xl font-bold text-white">{play.title}</h4>
                                        </div>

                                        {/* Setup */}
                                        {play.setup && (
                                            <div className="bg-gradient-to-br from-gray-800/70 to-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-orange-500/30 transition-colors duration-300">
                                                <div className="text-orange-400 font-bold text-sm mb-3 flex items-center gap-2">
                                                    🎥 {play.setup.title}
                                                </div>
                                                <p className="text-gray-300 leading-relaxed text-base">{play.setup.content}</p>
                                            </div>
                                        )}

                                        {/* Quarters */}
                                        {play.quarters && (
                                            <div>
                                                <div className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                                                    🏀 THE PLAY BREAKDOWN
                                                </div>
                                                <div className="space-y-5">
                                                    {play.quarters.map((quarter: any, qIdx: number) => (
                                                        <div key={qIdx} className="bg-gradient-to-r from-gray-800/60 to-gray-800/30 rounded-xl p-5 border border-gray-700 hover:border-orange-500/30 transition-all duration-300">
                                                            <div className="font-bold text-orange-400 mb-3 flex items-center justify-between">
                                                                <span>{quarter.name}</span>
                                                                {quarter.time && <span className="text-xs text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full">{quarter.time}</span>}
                                                            </div>
                                                            <ul className="space-y-3">
                                                                {quarter.plays.map((item: string, iIdx: number) => (
                                                                    <li key={iIdx} className="text-gray-300 text-sm flex items-start gap-3 leading-relaxed">
                                                                        <span className="text-orange-500 mt-1 font-bold">•</span>
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {play.technologies && (
                                            <div className="space-y-5">
                                                <div className="text-white font-bold text-xl flex items-center gap-3">
                                                    📚 TECHNOLOGIES RESEARCHED & INTRODUCED
                                                </div>
                                                {play.technologies.map((tech: any, tIdx: number) => (
                                                    <div key={tIdx} className="bg-gradient-to-br from-gray-800/70 to-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:translate-x-1">
                                                        <h5 className="font-bold text-orange-400 mb-4 text-lg flex items-center gap-2">
                                                            ▸ {tech.name}
                                                        </h5>
                                                        <div className="space-y-3 text-sm">
                                                            <div className="flex gap-3">
                                                                <span className="text-gray-500 font-semibold min-w-28">Challenge:</span>
                                                                <span className="text-gray-300 leading-relaxed">{tech.challenge}</span>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <span className="text-gray-500 font-semibold min-w-28">Solution:</span>
                                                                <span className="text-gray-300 leading-relaxed">{tech.solution}</span>
                                                            </div>
                                                            <div className="flex gap-3">
                                                                <span className="text-gray-500 font-semibold min-w-28">Impact:</span>
                                                                <span className="text-green-400 font-semibold">{tech.impact}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {play.approach && (
                                                    <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 rounded-xl p-6 border border-purple-500/40 hover:border-purple-500/60 transition-colors duration-300">
                                                        <div className="text-purple-400 font-bold text-sm mb-3 flex items-center gap-2">
                                                            💭 APPROACH TO TECH ADOPTION
                                                        </div>
                                                        <p className="text-gray-300 italic leading-relaxed text-base">{play.approach}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Strategies */}
                                        {play.strategies && (
                                            <div className="space-y-5">
                                                {play.strategies.map((strategy: any, sIdx: number) => (
                                                    <div key={sIdx} className="bg-gradient-to-br from-gray-800/70 to-gray-800/40 rounded-xl p-6 border border-gray-700 hover:border-green-500/30 transition-all duration-300">
                                                        <div className="font-bold text-orange-400 mb-4 text-lg">{strategy.type}</div>
                                                        <ul className="space-y-3">
                                                            {strategy.tactics.map((tactic: string, tIdx: number) => (
                                                                <li key={tIdx} className="text-gray-300 text-sm flex items-start gap-3 leading-relaxed">
                                                                    <span className="text-orange-500 mt-1 font-bold">•</span>
                                                                    <span>{tactic}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Stats */}
                                        {play.stats && (
                                            <div>
                                                <div className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                                                    📊 {play.quarters ? 'FINAL STATS' : 'IMPACT METRICS'}
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {play.stats.map((stat: any, sIdx: number) => (
                                                        <div key={sIdx} className="bg-gradient-to-br from-gray-800 via-gray-800/80 to-gray-800/50 rounded-xl p-5 border border-gray-700 hover:border-orange-500/50 hover:scale-105 transition-all duration-300">
                                                            <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{stat.label}</div>
                                                            <div className="text-base md:text-lg font-bold text-orange-400 leading-snug">{stat.value}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Leadership Style */}
                                        {play.leadershipStyle && (
                                            <div className="bg-gradient-to-r from-green-900/40 to-green-800/30 rounded-xl p-6 border border-green-500/40 hover:border-green-500/60 transition-colors duration-300">
                                                <div className="text-green-400 font-bold text-sm mb-3 flex items-center gap-2">
                                                    🎯 LEADERSHIP STYLE
                                                </div>
                                                <p className="text-gray-300 italic leading-relaxed text-base">"{play.leadershipStyle}"</p>
                                            </div>
                                        )}

                                        {/* Innovation Highlights */}
                                        {play.innovationHighlights && (
                                            <div>
                                                <div className="text-white font-bold text-xl mb-5 flex items-center gap-3">
                                                    🎯 INNOVATION HIGHLIGHTS
                                                </div>
                                                <div className="space-y-3">
                                                    {play.innovationHighlights.map((highlight: string, hIdx: number) => (
                                                        <div key={hIdx} className="flex items-start gap-4 text-gray-300 bg-gradient-to-r from-orange-900/20 to-orange-800/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-colors">
                                                            <span className="text-orange-400 mt-1 font-bold">•</span>
                                                            <span className="leading-relaxed">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Scout's Assessment */}
                <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/30 rounded-2xl border border-orange-500/40 p-8 md:p-10 shadow-2xl hover:shadow-orange-900/20 transition-all duration-300">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
                        <Shield className="text-orange-500 w-8 h-8" />
                        Scout's Final Assessment
                    </h2>
                    
                    <div className="space-y-8">
                        <p className="text-gray-300 leading-relaxed text-lg md:text-xl italic border-l-4 border-orange-500 pl-6 py-2">
                            "Elite two-way player. Builds complex systems from scratch while leading teams through delivery. Rare combination: deep technical skills + strategic vision + proactive innovation. Identifies problems before they're assigned and ships solutions."
                        </p>

                        <div>
                            <h3 className="text-orange-400 font-bold mb-5 text-lg uppercase tracking-wide">STRENGTHS:</h3>
                            <div className="space-y-3">
                                {[
                                    'Full-stack versatility (Python, React, Next.js mastery)',
                                    'Architecture thinking (builds for scale, modularity)',
                                    'Technology scouting (adopts emerging tech strategically)',
                                    'Team multiplier (elevates cross-functional delivery)',
                                    'Parallel execution (manages 2-4 projects without dropping ball)'
                                ].map((strength, idx) => (
                                    <div key={idx} className="flex items-start gap-4 text-gray-300 bg-gray-900/40 rounded-lg p-4 hover:bg-gray-900/60 transition-colors">
                                        <span className="text-orange-400 mt-1 font-bold text-lg">•</span>
                                        <span className="leading-relaxed">{strength}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-xl p-6 border border-orange-500/40 hover:border-orange-500/60 transition-colors duration-300">
                            <h3 className="text-orange-400 font-bold mb-3 text-base uppercase tracking-wide">PLAYING STYLE:</h3>
                            <p className="text-gray-300 leading-relaxed text-base">
                                <span className="font-bold text-white text-lg">Point Forward</span> - Combines individual scoring ability with team orchestration. Can take over games when needed but prefers to make everyone around them better.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-purple-500/40 hover:border-purple-500/60 transition-colors duration-300">
                            <h3 className="text-purple-400 font-bold mb-3 text-base uppercase tracking-wide">PROJECTION:</h3>
                            <p className="text-gray-300 leading-relaxed text-base">
                                Ready for larger scope, bigger teams, strategic technical leadership. Look to make impact with the knowledge/experience gained from latest years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ScoutingReport };