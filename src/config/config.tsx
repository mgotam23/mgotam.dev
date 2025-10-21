import { CareerTimelineItem } from "@/types/types";
import { ClipboardList, Code2, Shield, Star } from "lucide-react";
import { fullStackTeamLeadScoutingReportData } from "./RolesData";

const fullName = "Moshe Gotam";
const firstName = "Moshe";
const lastName = "Gotam";
const jobTitle = "Full-Stack Team Leader";
const email = "mgotam@gmail.com";
const github = "https://github.com/mgotam23";
const linkedin = "https://www.linkedin.com/in/moshe-gotam/";
const twitter = "https://twitter.com/mgotam23/";
const portfolio = "https://mgotam.com";
const aboutme = `I’m a full-stack developer and team leader with a passion for building clean, scalable systems and solving complex data challenges. Over the past few years, I’ve led projects across backend, frontend, and - working with Python, JavaScript (React, Next.js). 
Whether it's GIS apps, LLM integrations, or scraping systems, I’m all about shipping products that make a real impact.
Oh and I really love sports - mainly basketball!`;
const aboutMeShort = `Leading people to build clean, scalable systems and solve complex data challenges.`;

const skills = [
  "Python",
  "JavaScript",
  "Node.js",
  "NextJS",
  "PostgreSQL",
  "Docker",
  "Git",
];

const projects = [
  {
    title: "HuddleUp",
    description:
      "Social platform for sports enthusiasts to connect, share, and organize games.",
    techStack: ["Python", "React", "GIS", "Next.js"],
    image: "https://placehold.co/600x400/111827/F97316?text=HuddleUp",
    details: [
      "Developed a highly extensible architecture allowing for rapid integration of new data sources and visualization components.",
      "Implemented a real-time data processing pipeline to handle high-velocity geospatial information.",
      "Designed and built the front-end interface using Next.js for optimal performance and server-side rendering.",
      "This system became a core component for several subsequent projects, demonstrating its robustness and scalability.",
    ],
    type: "3-Pointer",
    shotPosition: { x: "20%", y: "30%" },
    images: [
      {
        src: "/projects/huddleup/feed.png",
        alt: "The App Main Feed Page.",
      },
      {
        src: "/projects/huddleup/menu.png",
        alt: "The App Menu.",
      },
      {
        src: "/projects/huddleup/tamir-blatt.png",
        alt: "Tamir Blatt Player Card.",
      }
    ]
  },
  {
    title: "Full Court",
    description: `A webapp that provides a location to keep your documents, from blogs, guides to slideshows.`,
    techStack: ["NextJS", "TypeScript"],
    image: "https://placehold.co/600x400/111827/F97316?text=Full+Court",
    details: [
      "Built with a modular architecture to support .md and .mdx documents.",
      "Implemented a powerful search feature to quickly locate documents based on keywords and tags.",
      "Help manage document inside team, able to showcase documents effectively.",
    ],
    type: "Mid-Range",
    shotPosition: { x: "70%", y: "65%" },
    images: [
      {
        src: "/projects/fullcourt/blog-post.png",
        alt: "Viewing a markdown document with rich formatting.",
      },
      {
        src: "/projects/fullcourt/sql-pres.png",
        alt: "A slideshow presentation rendered from markdown.",
      }
    ]
  },
  {
    title: "Project Data Dunk",
    description:
      "A custom Python system to analyze web-scraped data, significantly reducing research cycle time.",
    techStack: ["Python", "Web Scraping", "Data Analysis"],
    image: "https://placehold.co/600x400/111827/F97316?text=Data+Dunk",
    details: [
      "Engineered a scalable web scraping pipeline capable of handling large volumes of data from various sources.",
      "Developed a custom graph generation algorithm in Python to uncover hidden patterns and relationships within the data.",
      "The system's insights directly led to a 60% reduction in time spent on manual research and analysis.",
    ],
    type: "In the Paint",
    shotPosition: { x: "50%", y: "25%" },
  },
];

const careerTimeline: CareerTimelineItem[] = [
  {
    role: "Full Stack Team Leader",
    company: "Matrix Defence Ltd.",
    date: "Dec 2022 - Present",
    description:
      "Leading 2-4 concurrent full-stack projects using Python & React/Next.js. Architected key platforms from scratch, including a modular C2 system for GIS apps and a real-time translation tool using LLMs.",
    notes:
      "Leading people to build clean, scalable systems and solve complex data challenges.",
    icon: <ClipboardList />,
    data: fullStackTeamLeadScoutingReportData,
  },
  {
    role: "Backend Developer",
    company: "Matrix Defence Ltd.",
    date: "Sep 2021 - Dec 2022",
    description:
      "Reduced research cycle time by 60% by developing a custom Python-based graph generation system to analyze large-scale web-scraped data.",
    notes:
      "Implemented efficient algorithms to optimize data processing and improve overall system performance.",
    icon: <Code2 />,
  },
  {
    role: "Full-Stack Developer",
    company: "Ministry of Health",
    date: "Dec 2020 - Sep 2021",
    description:
      "Developed a full-stack web application using the MERN stack with Redux, handling end-to-end development from architecture to production.",
    notes:
      "Collaborated closely with data scientists to ensure the application met complex business requirements.",
    icon: <Star />,
  },
  {
    role: "Iron Dome Officer",
    company: "Israeli Air Force (IAF)",
    date: "2011 - 2016",
    description:
      "Led a team of 20 soldiers and 2 squad commanders in high-pressure operational conditions, demonstrating adaptability and leadership.",
    notes:
      "Developed strong leadership skills and the ability to perform under pressure.",
    icon: <Shield />,
  },
];

export {
  fullName,
  firstName,
  lastName,
  jobTitle,
  email,
  github,
  linkedin,
  twitter,
  portfolio,
  aboutme,
  aboutMeShort,
  skills,
  projects,
  careerTimeline,
};
