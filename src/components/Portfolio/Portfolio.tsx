"use client";

import React from "react";

import { ShotChart } from "./components/04-ShotChart";
import { Header, Hero, ClipboardJourney, BlogSection } from "./components";
import { ContactSection } from "./components/06-ContactSection";
import { careerTimeline } from "@/config/config";

export default function Portfolio() {

  const sections = ["tip_off", "report", "journey", "highlights", "blog"];


  return (
    <>

      <div className="min-h-screen bg-[#111827] text-[#F9FAFB] font-sans">
        <Header sections={sections} />
        <Hero />
        <ClipboardJourney careerTimeline={careerTimeline} />
        <ShotChart />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
}
