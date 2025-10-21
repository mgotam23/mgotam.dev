import { ScoutingReportData } from "@/types/types";
import { Layers, Rocket, Target, TrendingUp, Users, Zap } from "lucide-react";

const fullStackTeamLeadScoutingReportData: ScoutingReportData = {
  currentRole: {
    title: "Full-Stack Team Leader",
    subtitle: "Python & React Specialist",
    skills: ["Python", "React", "Next.js", "TypeScript", "AWS", "Docker", "GraphQL", "PostgreSQL"]
  },
  highlights: [
    { icon: <Layers className="w-4 h-4" />, text: 'Architected 5+ platforms from zero to production' },
    { icon: <Rocket className="w-4 h-4" />, text: 'Introduced new technologies that became company standards' },
    { icon: <Users className="w-4 h-4" />, text: 'Led cross-functional teams across 2-4 concurrent projects' },
    { icon: <Zap className="w-4 h-4" />, text: 'Built real-time LLM translation tool (company first)' },
    { icon: <Target className="w-4 h-4" />, text: 'Created modular GIS C2 system used by 3 projects' },
    { icon: <TrendingUp className="w-4 h-4" />, text: 'Improved observability with ELK stack' },
  ],
  stats: [
    { value: "5+", label: "Platforms Built" },
    { value: "200+", label: "Users Impacted" },
    { value: "90%", label: "Faster Translation" },
    { value: "2-4", label: "Concurrent Projects" }
  ],
  innovations: [
    {
      title: "Real-Time Translation Platform",
      type: "SIGNATURE PLAY",
      description: "Internal teams struggling with language barriers in global work. Existing tools: slow, clunky, broke workflow. Accessibility gap.",
      phases: [
        {
          name: "Scouting Phase: Technology Research",
          items: [
            "Evaluated LLM options (GPT-4, Claude, open-source models)",
            "Tested streaming APIs for real-time translation",
            "Benchmarked latency vs accuracy tradeoffs",
            "Selected optimal model for internal use case"
          ]
        },
        {
          name: "Execution Phase: Platform Build",
          items: [
            "Architected streaming interface for live translation",
            "Built React frontend with real-time text updates",
            "Implemented Python backend with LLM integration",
            "Optimized for <500ms response times",
            "Added context preservation across conversations"
          ]
        }
      ],
      metrics: [
        { label: "Translation speed", value: "3-5 sec → <0.5 sec (90% faster)" },
        { label: "User adoption", value: "0 → 200+ internal users" },
        { label: "Meeting efficiency", value: "30% time saved" },
        { label: "Accessibility", value: "Company-wide improved" }
      ],
      highlights: [
        "First to introduce LLM streaming in company infrastructure",
        "Proactive solution to unspoken accessibility problem",
        "Built in parallel to primary projects (nights/weekends)"
      ]
    },
    {
      title: "Technology Adoption Playbook",
      type: "KEY SEQUENCE",
      description: "",
      technologies: [
        {
          name: "Next.js Migration",
          challenge: "React app performance bottlenecks",
          solution: "SSR/SSG with Next.js for faster load times",
          impact: "60% faster initial page load"
        },
        {
          name: "Apache Airflow Integration",
          challenge: "Manual workflow orchestration, error-prone",
          solution: "Automated DAGs for complex data pipelines",
          impact: "95% reduction in manual intervention"
        },
        {
          name: "ELK Stack Implementation",
          challenge: "Limited system observability, hard to debug",
          solution: "Centralized logging with Elasticsearch/Kibana",
          impact: "Debug time: hours → minutes"
        }
      ],
      approach: "Doesn't chase shiny objects. Identifies real problems, then researches proven solutions. Prototypes fast, measures impact, then scales. Smart risk-taker."
    }
  ],
  leadership: [
    {
      title: "Concurrent Project Juggling Act",
      type: "SIGNATURE PLAY",
      situation: "Managing 2-4 full-stack projects simultaneously across cross-functional teams. Backend Python services, React frontends, Next.js apps - all moving at different speeds.",
      strategies: [
        {
          type: "Offensive Strategy: Delivery Management",
          tactics: [
            "Organized sprint planning across multiple workstreams",
            "Coordinated backend/frontend handoffs seamlessly",
            "Unblocked teams by jumping into critical path work",
            "Maintained code quality across all projects"
          ]
        },
        {
          type: "Defensive Strategy: Risk Mitigation",
          tactics: [
            "Identified integration risks early through architecture review",
            "Prevented scope creep with clear technical boundaries",
            "Established rollback procedures for safe deployments"
          ]
        }
      ],
      style: "Leads from the front. Writes code alongside the team while maintaining strategic oversight. Removes blockers fast. Clear communicator who translates between technical and business.",
      metrics: [
        { value: "2-4", label: "Concurrent Projects" },
        { value: "15+", label: "Team Members Led" },
        { value: "100%", label: "On-Time Delivery" },
        { value: "Zero", label: "Critical Blockers" }
      ],
      qualities: [
        { title: "Technical Excellence", desc: "Deep expertise across full stack, sets high code standards" },
        { title: "Strategic Vision", desc: "Sees the big picture while managing tactical execution" },
        { title: "Team Multiplier", desc: "Elevates team performance through mentoring and support" },
        { title: "Clear Communication", desc: "Bridges technical and business stakeholders effectively" },
        { title: "Problem Solver", desc: "Quickly identifies and removes blockers for the team" },
        { title: "Adaptive Leadership", desc: "Adjusts style based on team needs and project phase" }
      ]
    }
  ],
  assessment: {
    summary: "Elite two-way player. Builds complex systems from scratch while leading teams through delivery. Rare combination: deep technical skills + strategic vision + proactive innovation. Identifies problems before they're assigned and ships solutions.",
    strengths: [
      { title: "Full-stack versatility", detail: "Python, React, Next.js mastery" },
      { title: "Architecture thinking", detail: "Builds for scale and modularity" },
      { title: "Technology scouting", detail: "Adopts emerging tech strategically" },
      { title: "Team multiplier", detail: "Elevates cross-functional delivery" },
      { title: "Parallel execution", detail: "Manages 2-4 projects seamlessly" }
    ],
    playingStyle: {
      title: "Point Forward",
      description: "Combines individual scoring ability with team orchestration. Can take over games when needed but prefers to make everyone around them better. Creates opportunities for others while maintaining elite personal production."
    },
    grades: [
      { category: "Technical Skills", grade: "A+" },
      { category: "Leadership", grade: "A+" },
      { category: "Innovation", grade: "A" },
      { category: "Execution", grade: "A+" },
      { category: "Collaboration", grade: "A" },
      { category: "Impact", grade: "A+" }
    ],
    projection: "Ready for larger scope, bigger teams, strategic technical leadership. Look to make impact with the knowledge/experience gained from latest years. Positioned to drive organizational transformation through technical excellence and team leadership.",
    comparableTo: "Elite tech leads who transitioned to engineering management while maintaining technical depth. Similar trajectory to principal engineers who become VPs of Engineering at high-growth companies."
  }
};

export { fullStackTeamLeadScoutingReportData };