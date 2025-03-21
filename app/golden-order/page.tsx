"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GoldenOrderPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10">
        <header className="p-6 border-b border-amber-900/50">
          <Link 
            href="/"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors w-fit"
          >
            <ChevronLeft />
            <span>Back to Radagon</span>
          </Link>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl text-amber-500 tracking-wider text-center mb-8">THE GOLDEN ORDER</h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">Fundamentals</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                The Golden Order represents the fundamental laws that govern the world of the Lands Between, 
                established through the power of the Elden Ring and the Greater Will. It is both a philosophical 
                system and a source of miraculous power, championed most ardently by Radagon.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                The Order's principles are derived from the study of causality and the fundamental forces that bind 
                reality together. Those who master these principles can perform powerful incantations that manipulate 
                these cosmic laws.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">Radagon's Contribution</h2>
              <p className="text-amber-200/80 leading-relaxed">
                Under Radagon's guidance, the study of Golden Order Fundamentalism flourished. His unique approach 
                combined scholarly rigor with unwavering faith, leading to the development of powerful incantations 
                that required both high intelligence and faith to cast. This synthesis of knowledge and belief 
                became a cornerstone of the Order's teachings.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider">Legacy</h2>
              <p className="text-amber-200/80 leading-relaxed">
                Though the Shattering has left the Golden Order in disarray, its principles continue to influence 
                the Lands Between. The Order's incantations remain powerful tools for those who understand their 
                fundamentals, and its philosophy continues to shape the worldview of many who seek to restore order 
                to a fractured world.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
} 