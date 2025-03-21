"use client"

import { AnimatedHeader, AnimatedMainContent, AnimatedWeaponsSection, AnimatedTimelineSection, AnimatedMysteriesSection } from "@/components/animated-sections"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <AnimatedHeader />
      
      <div className="relative z-10">
        <AnimatedMainContent />
        <AnimatedWeaponsSection />
        <AnimatedTimelineSection />
        <AnimatedMysteriesSection />
      </div>
    </div>
  )
}

