"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function MaleniaPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background with overlay */}
      <div className="fixed inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20 pointer-events-none"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-6 border-b border-amber-900/50 bg-black/50 backdrop-blur-sm">
          <Link 
            href="/"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors w-fit group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Radagon</span>
          </Link>
        </header>

        {/* Main content */}
        <main className="flex-1 container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-5xl text-amber-500 tracking-wider text-center mb-8 font-bold">
              MALENIA, BLADE OF MIQUELLA
            </h1>
            
            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm rounded-lg shadow-lg shadow-amber-900/20">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider font-semibold">The Undefeated</h2>
              <p className="text-amber-200/80 leading-relaxed mb-4">
                Malenia, twin to Miquella and daughter of Radagon and Queen Marika, is known throughout the Lands 
                Between as the most powerful warrior to ever live. Despite being afflicted with the Scarlet Rot 
                from birth, she has never known defeat in battle.
              </p>
              <p className="text-amber-200/80 leading-relaxed">
                Her legendary duel with Starscourge Radahn during the Shattering ended in a stalemate, though her 
                unleashing of the Scarlet Rot left Caelid forever changed, a testament to her terrible power.
              </p>
            </div>

            <div className="border border-amber-900/50 bg-black/70 p-6 backdrop-blur-sm rounded-lg shadow-lg shadow-amber-900/20">
              <h2 className="text-2xl text-amber-500 mb-4 tracking-wider font-semibold">Blade of Miquella</h2>
              <p className="text-amber-200/80 leading-relaxed">
                Her unwavering devotion to her twin brother Miquella led her to take up residence in the Haligtree, 
                serving as its fierce protector. Though the Scarlet Rot continues to consume her, Malenia's pride 
                and loyalty remain undiminished, as she awaits her brother's awakening.
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
 