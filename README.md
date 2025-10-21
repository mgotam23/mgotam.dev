# Moshe Gotam - "The Software Playmaker" Portfolio

This repository contains the source code for my personal portfolio, a fully responsive single-page application built with Next.js and Tailwind CSS. The portfolio is designed with a unique "basketball flair," framing my professional experience as a "Scouting Report" for potential employers and collaborators.

**Live Demo:** 

## 🏀 The Concept: The Software Playmaker

The core theme of this portfolio is to present my skills and career journey through the lens of a professional basketball player's career. The goal is to create a memorable and engaging narrative that goes beyond a traditional resume.

**The Player:** Moshe Gotam

**The Position:** Software Playmaker & Full-Stack Dev

**The Game Plan:** To build clean, scalable systems and solve complex data challenges.

### ✨ Key Features

The portfolio is designed as a single page with several basketball-themed sections:

- Tip-Off (Hero Section): A high-impact, minimalist hero section inspired by `Awwwards.com` designs, featuring bold typography and an interactive mouse-follower effect.

- The Journey: An interactive "Scout's Clipboard" that showcases my career history. It features a responsive tab-based interface to navigate through different roles ("seasons") with different teams.

- Career Highlights: An interactive SVG "shot chart" where each "shot" on the basketball court represents a key project. Hovering reveals a description, and clicking opens a detailed modal.

- The Playbook: A modern, visually-driven blog section with a "cover story" for the latest post and a "box score" for post details.

Fully Responsive: The entire application is designed to be fully functional and visually appealing on all devices, from mobile phones to desktop monitors.

### 🛠️ Tech Stack

This project is built with a modern, performance-oriented tech stack:

Framework: Next.js (React)

Styling: Tailwind CSS for utility-first styling.

Icons: Lucide React for clean and consistent icons.

Typography: Self-hosted fonts ('Oswald' and 'Roboto') for performance and offline availability.

### 🚀 Getting Started

To run this project locally, follow these steps:

Clone the repository:
```bash
git clone [your-repository-url]


Install dependencies:

npm install
# or
yarn install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

### Font Setup

The project uses self-hosted versions of 'Oswald' and 'Roboto' for performance. The font files (.woff2) should be placed in the /public/fonts/ directory. The @font-face declarations are handled within the main Portfolio.tsx component using style jsx global.

### 📂 Project Structure

The entire application is self-contained within a single component file: Portfolio.tsx. This file includes:

All React components (Hero, Scouting Report, Shot Chart, Modals, etc.).

TypeScript type definitions for all data structures.

The usePortfolio hook, which acts as a mock database for all portfolio content.

Global styles and font declarations.

This single-file structure is designed for simplicity and portability within this specific project context.

### 🏀 Future Plays & Enhancements

This project is an ongoing effort. Here are some of the next features and improvements planned for the roadmap:

- [ ] Blog Detail Pages: Build out the individual pages for each blog post in "The Playbook" section.

- [ ] Testing: Implement unit and integration tests using Jest and React Testing Library to ensure code quality and robustness.

- [ ] CI/CD Pipeline: Set up a continuous integration and deployment pipeline using GitHub Actions to automate deployments to Vercel or Netlify.

You reached the end ! Thanks for reading, hope you enjoy the site!